import { useGlobalState } from "@/store";
import { CardItem, Group, Role } from "@/views/Type";

const state = useGlobalState()

/**
 * 获取翻译名字
 * @param group 分组
 * @returns 
 */
export const getName = (group: Group) => {
    return group == "emperor" ? "国王" : "乞丐";
}

/**
 * 获取指定类型图片资源
 * @param type 传入类型
 * @returns 
 */
export const getSpecifyImg = (type: Role) => {
    return `${type}.jpg`; // 暂时
}

/**
 * 创建卡片
 * @param type 传入类型 
 * @param sort 序号
 * @param group 分组
 * @returns 
 */
export const createCard = (type: Role, sort: number, group: Group): CardItem => {
    return { role: type, img: getSpecifyImg(type), isClick: false, sort, group };
}

/**
 * 初始化阵营卡片
 * @param group 分组
 * @returns 
 */
export const initRoleItems = (group: Group) => {
    const items: CardItem[] = Array(4).fill(0).map((_, idx) => createCard('citizen', idx + 1, group));
    items.unshift(createCard(group, 0, group));
    return items;
}
/**
 * 获取对立角色
 * @param group 分组
 * @returns 
 */
export const getReverseRole = (group: Group) => group == "emperor" ? "slave" : "emperor"
/**
 * 初始化轮次 
 * @param playerRole 玩家角色
 * @param rounds 回合数
 */
export const initRounds = (playerRole: Group, rounds: number) => {
    // 初始化角色
    state.value.playerRole = playerRole;
    state.value.rounds = rounds;
    state.value.playerCardItems = initRoleItems(playerRole);
    state.value.computerCardItems = initRoleItems(getReverseRole(playerRole));
}
/**
 * 进行下一轮
 */
export const nextRounds = () => {
    const nextRole = getReverseRole(state.value.playerRole);
    const nextRound = state.value.rounds + 1;
    initRounds(nextRole, nextRound);
}
