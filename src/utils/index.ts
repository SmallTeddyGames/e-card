// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}
export const moveDom = (dom : Element) => {
  dom.classList.add("cardDisposeArea");
}
