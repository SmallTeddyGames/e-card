import { useGlobalState } from "@/store";
import { getRandomNumber } from './index';
import { CardItem, GroupEn, GroupCn, Role, GameStateType } from "@/views/Type";

const state: { value: GameStateType } = useGlobalState()

/**
 * 获取翻译名字
 * @param group 分组
 * @returns 
 */
export const getName = (group: GroupEn): GroupCn => {
    return group == "emperor" ? "国王" : "奴隶";
}

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
 */
export const initRounds = (playerRole: GroupEn, rounds: number): void => {
    // 初始化
    state.value = {
        playerRole,
        rounds,
        gameState: "init",
        difficulty: 'middle',
        isAiBattle: true,
        playerCardItems: initRoleItems(playerRole, true),
        computerCardItems: initRoleItems(getReverseRole(playerRole), false),
        bgImage: 1,
        isShowGameInfo: true,
        gameLogItems: [],
        dropedCardItems: []
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

