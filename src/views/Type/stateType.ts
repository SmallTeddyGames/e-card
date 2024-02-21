import { CardItem } from "./cardType";
import { GameStatus } from "./gameType";
import { GroupEn } from "./groupType";
import { LogItem } from "./logType";

export type GameStateType = {
  // 最开始未确定玩家角色
  playerRole: GroupEn;
  // 语言设置
  language: 'cn' | 'en' | 'jp' | 'kr';
  // 人机对战
  isAiBattle: boolean;
  // 游戏难度
  difficulty: 'easy' | 'middle' | 'hard';
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
  dropedCardItems: CardItem[]
}
