import { CardItem } from "@/views/Type/cardType";

// 获取翻译名字
export const getName = (role: 'emperor' | 'slave') => {
    return role == "emperor" ? "国王" : "乞丐";
}

// 获取指定类型图片资源
export const getSpecifyImg = (type: 'emperor' | 'slave' | 'citizen') => {
    return `${type}.jpg`; // 暂时
}
// 创建卡片 传入类型 序号 分组
export const createCard = (type: 'emperor' | 'slave' | 'citizen', sort: number, group: 'emperor' | 'slave'): CardItem => {
    return {role: type, img: getSpecifyImg(type), isClick: false, sort, group };
}
// 初始化阵营卡片
export const initRoleItems = (role: 'emperor' | 'slave') => {
    const items: CardItem[] = Array(4).fill(0).map((_, idx) => createCard('citizen', idx+1, role));
    items.unshift(createCard(role, 0, role));
    return items;
}
