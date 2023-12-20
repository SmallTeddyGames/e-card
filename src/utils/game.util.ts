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
 * 获取指定类型图片资源
 * @param type 传入类型
 * @returns 
 */
export const getSpecifyImg = (type: Role): string => {
    return `${type}.jpg`; // 暂时
}

/**
 * 创建卡片
 * @param type 传入类型 
 * @param sort 序号
 * @param group 分组
 * @returns 
 */
export const createCard = (type: Role, sort: number, group: GroupEn): CardItem => {
    return { role: type, img: getSpecifyImg(type), isClick: false, sort, group };
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
    // 初始化角色
    state.value.playerRole = playerRole;
    state.value.rounds = rounds;
    state.value.playerCardItems = initRoleItems(playerRole);
    state.value.computerCardItems = initRoleItems(getReverseRole(playerRole));
}

/**
 * 进行下一轮
 */
export const nextRounds = (): void => {
    const nextRole = getReverseRole(state.value.playerRole);
    const nextRound = state.value.rounds + 1;
    initRounds(nextRole, nextRound);
}
