import { CardItem } from "./cardType";
import { GameStatus } from "./gameType";
import { GroupEn } from "./groupType";
import { LogItem } from "./logType";

export type Difficulty = 'easy' | 'middle' | 'hard' | 'hell';

export type GameStateType = {
  // 最开始未确定玩家角色
  playerRole: GroupEn;
  // 语言设置
  language: 'cn' | 'en' | 'jp' | 'kr';
  // 人机对战
  isAiBattle: boolean;
  // 游戏难度
  difficulty: Difficulty;
  // 当前局此
  rounds: number;
  // 游戏状态
  gameState: GameStatus;
  // 玩家当前持有卡牌
  playerCardItems: CardItem[];
  // 电脑当前持有卡牌
  computerCardItems: CardItem[];
  // 背景图片
  bgImage: number;
  // 是否显示游戏日志
  isShowGameInfo: boolean;
  // 游戏日志
  gameLogItems: LogItem[];
  // 丢弃的卡牌
  dropedCardItems: CardItem[];
  // 玩家游戏豆
  playerBeans: number;
  // 电脑游戏豆
  computerBeans: number;
  // 本局押注数量
  betAmount: number;
  // 初始游戏豆
  initialBeans: number;
  // 玩家出牌历史记录（用于AI分析）
  playerPlayHistory: Array<{ round: number; role: GroupEn; cardRole: string; sort: number }>;
  // 电脑出牌历史记录
  computerPlayHistory: Array<{ round: number; role: GroupEn; cardRole: string; sort: number }>;
  // 总赢局数
  totalWins: number;
  // 总输局数
  totalLosses: number;
  // 是否音效开启
  soundEnabled: boolean;
}
