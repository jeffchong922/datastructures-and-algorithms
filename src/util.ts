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