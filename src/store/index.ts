import { createGlobalState, useStorage } from '@vueuse/core'
import { Ref } from 'vue'
import { GameStateType } from '@/views/Type'

export const useGlobalState: () => Ref<GameStateType> = createGlobalState(
  () => useStorage('global-state', {
    // 最开始未确定玩家角色
    playerRole: null,
    // 语言设置
    language: 'cn',
    // 人机对战
    isAiBattle: true,
    // 游戏难度
    difficulty: 'middle',
    // 当前局此
    rounds: 0,
    // 游戏状态
    gameState: 'init',
    // 玩家当前持有卡牌
    playerCardItems: [],
    // 电脑当前持有卡牌
    computerCardItems: [],
    // 背景图片
    bgImage: 1,
    // 是否显示游戏日志
    isShowGameInfo: true,
    // 游戏日志
    gameLogItems: [],
    // 丢弃的卡牌
    dropedCardItems: [],
    // 玩家游戏豆
    playerBeans: 1000,
    // 电脑游戏豆
    computerBeans: 1000,
    // 本局押注数量
    betAmount: 100,
    // 初始游戏豆
    initialBeans: 1000,
    // 玩家出牌历史记录（用于AI分析）
    playerPlayHistory: [],
    // 电脑出牌历史记录
    computerPlayHistory: [],
    // 总赢局数
    totalWins: 0,
    // 总输局数
    totalLosses: 0,
    // 是否音效开启
    soundEnabled: true
  })
)
