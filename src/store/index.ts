import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => useStorage('global-state', {
    // 最开始未确定玩家角色
    playerRole: null,
    // 人机对战
    isAiBattle: true,
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
    // 是否显示游戏信息
    isShowGameInfo: true
  })
)
