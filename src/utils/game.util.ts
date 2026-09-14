import { useGlobalState } from "@/store";
import { getRandomNumber } from './index';
import { CardItem, GroupEn, Role, GameStateType, Difficulty } from "@/views/Type";

const state: { value: GameStateType } = useGlobalState()

/**
 * 创建卡片
 * @param type 传入类型 
 * @param sort 序号
 * @param group 分组
 * @returns 
 */
export const createCard = (role: Role, sort: number, group: GroupEn): CardItem => {
    return { role: role, img: `${role}.jpg`, isClick: false, isBack: false, sort, group };
}

/**
 * 初始化阵营卡片
 * @param group 分组
 * @returns 
 */
export const initRoleItems = (group: GroupEn, isPlayer: boolean = true): CardItem[] => {
    const items: CardItem[] = Array(5).fill(0).map((_, idx) => createCard('citizen', idx + 1, group));
    const sort = getRandomNumber(5);
    items[sort] = (createCard(group, sort + 1, group));
    items.map(card => card.isBack = !isPlayer)
    return items;
}

/**
 * 获取对立角色
 * @param group 分组
 * @returns 
 */
export const getReverseRole = (group: GroupEn): GroupEn => group == "emperor" ? "slave" : "emperor"

/**
 * 初始化轮次 
 * @param playerRole 玩家角色
 * @param rounds 回合数
 * @param difficulty 难度
 * @param betAmount 押注数量
 * @param initialBeans 初始游戏豆
 */
export const initRounds = (
    playerRole: GroupEn,
    rounds: number,
    difficulty: Difficulty = 'middle',
    betAmount: number = 100,
    initialBeans: number = 1000
): void => {
    // 初始化
    state.value = {
        playerRole,
        rounds,
        language: state.value.language,
        gameState: "init",
        difficulty,
        isAiBattle: true,
        playerCardItems: initRoleItems(playerRole, true),
        computerCardItems: initRoleItems(getReverseRole(playerRole), false),
        bgImage: state.value.bgImage,
        isShowGameInfo: true,
        gameLogItems: [],
        dropedCardItems: [],
        playerBeans: initialBeans,
        computerBeans: initialBeans,
        betAmount,
        initialBeans,
        playerPlayHistory: [],
        computerPlayHistory: [],
        totalWins: state.value.totalWins || 0,
        totalLosses: state.value.totalLosses || 0,
        soundEnabled: state.value.soundEnabled
    }
}

/**
 * 进行下一轮
 */
export const nextRounds = (): void => {
    const nextRole = getReverseRole(state.value.playerRole);
    const nextRound = state.value.rounds + 1;
    state.value.playerRole = nextRole;
    state.value.rounds = nextRound;
    state.value.playerCardItems = initRoleItems(nextRole, true);
    state.value.computerCardItems = initRoleItems(getReverseRole(nextRole), false);
    state.value.dropedCardItems = [];
}

/**
 * 结算豆子
 * @param result 'win' | 'lose' | 'draw'
 */
export const settleBeans = (result: 'win' | 'lose' | 'draw'): number => {
    const bet = state.value.betAmount;
    let change = 0;
    if (result === 'win') {
        change = bet;
        state.value.playerBeans += bet;
        state.value.computerBeans -= bet;
    } else if (result === 'lose') {
        change = -bet;
        state.value.playerBeans -= bet;
        state.value.computerBeans += bet;
    }
    return change;
}

/**
 * 检查游戏是否因豆子耗尽而结束
 * @returns 'player-bankrupt' | 'computer-bankrupt' | null
 */
export const checkBankruptcy = (): 'player-bankrupt' | 'computer-bankrupt' | null => {
    if (state.value.playerBeans <= 0) {
        return 'player-bankrupt';
    }
    if (state.value.computerBeans <= 0) {
        return 'computer-bankrupt';
    }
    return null;
}

/**
 * 重置豆子到初始值（重新开始游戏时）
 */
export const resetBeans = (): void => {
    state.value.playerBeans = state.value.initialBeans;
    state.value.computerBeans = state.value.initialBeans;
}
