export interface ISwapData<T> {
  [index: number]: T
}

export function swap<T> (data: ISwapData<T>, idx: number, swapIdx: number) {
  // const temp = data[idx]
  // data[idx] = data[swapIdx]
  // data[swapIdx] = temp
  [data[idx], data[swapIdx]] = [data[swapIdx], data[idx]]
}

/**
 * 返回一个在指定值之间的随机整数
 * 
 * 不含最大值，但含最小值
 */
export function getRandomInt (max: number, min: number = 0): number {
  if (min > max) {
    const temp = max
    max = min
    min = temp
  }
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 *  a > b 时交换
 */
export function defaultPredicateSwap<T> (a: T, b: T): boolean {
  if (typeof a !== 'number') {
    throw new Error('默认比较函数只支持number类型')
  }
  return a > b
    ? true
    : false
}