import { useGlobalState } from "@/store";
import { CardItem, GroupEn, GroupCn, Role } from "@/views/Type";

const state = useGlobalState()

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
export const createCard = (type: Role, sort: number, group: GroupEn): CardItem => {
    return { role: type, img: `${type}.jpg`, isClick: false, sort, group };
}

/**
 * 初始化阵营卡片
 * @param group 分组
 * @returns 
 */
export const initRoleItems = (group: GroupEn): CardItem[] => {
    const items: CardItem[] = Array(4).fill(0).map((_, idx) => createCard('citizen', idx + 1, group));
    items.unshift(createCard(group, 0, group));
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
        isAiBattle: true,
        playerCardItems: initRoleItems(playerRole),
        computerCardItems: initRoleItems(getReverseRole(playerRole)),
        bgImage: 1,
        isShowGameInfo: true
    }
}

/**
 * 进行下一轮
 */
export const nextRounds = (): void => {
    const nextRole = getReverseRole(state.value.playerRole);
    const nextRound = state.value.rounds + 1;
    initRounds(nextRole, nextRound);
}
