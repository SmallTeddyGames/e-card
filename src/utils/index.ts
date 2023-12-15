// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

// 根据最大数字生成随机数
export const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
}
