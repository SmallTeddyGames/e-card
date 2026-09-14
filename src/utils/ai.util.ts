import { useGlobalState } from "@/store";
import { CardItem, GroupEn, Difficulty, Role } from "@/views/Type";
import { getRandomNumber } from './index';

const state = useGlobalState();

/**
 * 玩家出牌习惯分析结果
 */
interface PlayerAnalysis {
  // 玩家出特殊牌（Emperor/Slave）的倾向分数，越高越可能出
  specialCardProbability: number;
  // 玩家出市民牌的倾向分数
  citizenProbability: number;
  // 预测玩家下一张牌
  predictedCard: Role;
  // 玩家在当前轮次的出牌偏好 (0-1, 1表示肯定出特殊牌)
  currentRoundSpecialBias: number;
}

/**
 * 分析玩家出牌习惯
 * 基于历史出牌数据和当前局势进行预测
 */
export const analyzePlayerHabit = (): PlayerAnalysis => {
  const history = state.value.playerPlayHistory;
  const currentRound = state.value.rounds;
  const playerRole = state.value.playerRole;

  if (history.length === 0) {
    // 无历史数据，返回默认分析
    return {
      specialCardProbability: 0.2,
      citizenProbability: 0.8,
      predictedCard: 'citizen',
      currentRoundSpecialBias: 0.2
    };
  }

  // 统计玩家出特殊牌的概率
  const specialPlays = history.filter(h => h.cardRole !== 'citizen');
  const specialRate = specialPlays.length / history.length;

  // 分析玩家出特殊牌的轮次偏好（早期/中期/晚期）
  const earlySpecial = specialPlays.filter(h => h.round <= 2).length;
  const midSpecial = specialPlays.filter(h => h.round > 2 && h.round <= 4).length;
  const lateSpecial = specialPlays.filter(h => h.round > 4).length;

  // 当前轮次特殊牌偏好
  let currentRoundSpecialBias = 0.2;
  if (currentRound <= 2) {
    currentRoundSpecialBias = earlySpecial / Math.max(history.filter(h => h.round <= 2).length, 1);
  } else if (currentRound <= 4) {
    currentRoundSpecialBias = midSpecial / Math.max(history.filter(h => h.round > 2 && h.round <= 4).length, 1);
  } else {
    currentRoundSpecialBias = lateSpecial / Math.max(history.filter(h => h.round > 4).length, 1);
  }

  // 分析玩家连续出市民牌的次数（如果连续出多张市民，可能接下来出特殊牌）
  let consecutiveCitizens = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].cardRole === 'citizen') {
      consecutiveCitizens++;
    } else {
      break;
    }
  }

  // 如果连续出了3张以上市民，特殊牌概率增加
  if (consecutiveCitizens >= 3) {
    currentRoundSpecialBias += 0.15;
  }

  // 检查玩家是否还有特殊牌（根据已出牌数判断）
  const playerSpecialPlayed = history.filter(h => h.role === playerRole && h.cardRole !== 'citizen').length;
  const hasSpecialCard = playerSpecialPlayed === 0;

  if (!hasSpecialCard) {
    currentRoundSpecialBias = 0;
  }

  // 平滑处理，避免过拟合
  const smoothedSpecialBias = specialRate * 0.4 + currentRoundSpecialBias * 0.6;

  const citizenProbability = 1 - smoothedSpecialBias;
  const predictedCard = smoothedSpecialBias > 0.5
    ? (playerRole === 'emperor' ? 'emperor' : 'slave')
    : 'citizen';

  return {
    specialCardProbability: smoothedSpecialBias,
    citizenProbability,
    predictedCard,
    currentRoundSpecialBias: smoothedSpecialBias
  };
};

/**
 * 根据难度获取AI决策的"聪明程度"
 * 返回0-1之间的值，越高越聪明
 */
const getDifficultySmartness = (difficulty: Difficulty): number => {
  switch (difficulty) {
    case 'easy': return 0.15;
    case 'middle': return 0.5;
    case 'hard': return 0.8;
    case 'hell': return 0.95;
    default: return 0.5;
  }
};

/**
 * AI选择出牌
 * 根据难度分析当前局势和玩家出牌习惯，做出决策
 * @param aiCards AI当前持有的卡牌
 * @param aiRole AI的角色
 * @returns 选中的卡牌索引
 */
export const aiChooseCard = (aiCards: CardItem[], aiRole: GroupEn): number => {
  const difficulty = state.value.difficulty;
  const smartness = getDifficultySmartness(difficulty);
  const analysis = analyzePlayerHabit();

  // 获取AI持有的特殊牌和市民牌索引
  const specialCardIndex = aiCards.findIndex(c => c.role !== 'citizen');
  const citizenIndices = aiCards.map((c, i) => c.role === 'citizen' ? i : -1).filter(i => i >= 0);

  // 随机决策（根据难度，聪明度越低越随机）
  if (Math.random() > smartness) {
    return getRandomNumber(aiCards.length);
  }

  // 智能决策
  const playerPredictedCard = analysis.predictedCard;

  if (aiRole === 'emperor') {
    // AI是皇帝方，玩家是奴隶方
    // 玩家可能出 Slave 或 Citizen
    if (playerPredictedCard === 'citizen') {
      // 预测玩家出市民，AI出皇帝获胜
      if (specialCardIndex >= 0) {
        // 但要权衡：如果已经出了很多市民，皇帝可能留到后面
        return specialCardIndex;
      }
    } else {
      // 预测玩家出奴隶，AI出市民获胜（市民赢奴隶）
      if (citizenIndices.length > 0) {
        return citizenIndices[getRandomNumber(citizenIndices.length)];
      }
    }
  } else {
    // AI是奴隶方，玩家是皇帝方
    // 玩家可能出 Emperor 或 Citizen
    if (playerPredictedCard === 'emperor') {
      // 预测玩家出皇帝，AI出奴隶获胜
      if (specialCardIndex >= 0) {
        return specialCardIndex;
      }
    } else {
      // 预测玩家出市民，AI出市民平局（避免出奴隶被市民赢）
      if (citizenIndices.length > 0) {
        return citizenIndices[getRandomNumber(citizenIndices.length)];
      }
    }
  }

  // 默认随机选择
  return getRandomNumber(aiCards.length);
};

/**
 * 记录玩家出牌历史（用于AI分析）
 */
export const recordPlayerPlay = (card: CardItem, role: GroupEn): void => {
  state.value.playerPlayHistory.push({
    round: state.value.rounds,
    role,
    cardRole: card.role,
    sort: card.sort || 0
  });
};

/**
 * 记录电脑出牌历史
 */
export const recordComputerPlay = (card: CardItem, role: GroupEn): void => {
  state.value.computerPlayHistory.push({
    round: state.value.rounds,
    role,
    cardRole: card.role,
    sort: card.sort || 0
  });
};

/**
 * 获取难度对应的AI思考延迟（毫秒）
 */
export const getAiThinkDelay = (difficulty: Difficulty): number => {
  switch (difficulty) {
    case 'easy': return 300;
    case 'middle': return 600;
    case 'hard': return 1000;
    case 'hell': return 1200;
    default: return 600;
  }
};
