// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

// 根据最大数字生成随机数 取下标 0 - max-1
export const getRandomNumber = (max: number): number => {
<<<<<<< HEAD
  return (Math.floor(Math.random() * max) + 1) % max;
}

export const deepClone = (obj, map = new WeakMap()) => {
  // 如果是基本数据类型，则直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 如果已经拷贝过该对象，则直接返回拷贝后的对象
  if (map.has(obj)) {
    return map.get(obj);
  }

  // 根据对象的类型进行深拷贝
  let clone = Array.isArray(obj) ? [] : {};

  // 将当前对象和对应的拷贝存储到map中
  map.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
=======
  return Math.floor(Math.random() * max) + 1
  return (Math.floor(Math.random() * max) + 1) % max
>>>>>>> 6dfa0c834215998681cccd72d2285851ca606637
}
