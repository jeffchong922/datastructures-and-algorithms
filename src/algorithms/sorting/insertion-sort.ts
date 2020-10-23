import { defaultPredicateSwap } from "../../util";
import { IPredicateSwap } from "./sorting.interface";

/**
 * 每次排一个数组项，以此方式构建最后的排序数组
 * 
 * 假定第一项已经排序了。接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？
 * 
 * 接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推
 */
export function insertionSort<T> (array: T[], predicateSwap: IPredicateSwap<T> = defaultPredicateSwap): T[] {
  const copyArray = array.slice()
  const { length } = copyArray

  // 当前迭代的值
  let temp: T
  // 第一项无需比较，直接从第二项开始
  for (let i = 1; i < length; i++) {
    // 辅助变量，用于 '向左' 排序
    let j = i
    temp = copyArray[i]
    // '向左' 查找合适的位置进行插入
    while (j > 0 && predicateSwap(copyArray[j - 1], temp)) {
      // 位置调换
      copyArray[j] = copyArray[j - 1]
      j--
    }
    // 将当前迭代的值放入正确位置
    copyArray[j] = temp
  }

  return copyArray
}