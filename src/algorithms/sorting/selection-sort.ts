import { defaultPredicateSwap, swap } from "../../util";
import { IPredicateSwap } from "./sorting.interface";

/**
 * 选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，
 * 接着找到第二小的值并将其放在第二位，以此类推
 * 
 * 复杂度为 O(n^2)
 */
export function selectionSort<T> (array: T[], predicateSwap: IPredicateSwap<T> = defaultPredicateSwap): T[] {
  const copyArray = array.slice()
  const { length } = copyArray

  // 最小值索引
  let minIdx: number
  // 外循环
  for (let i = 0; i < length - 1; i++) {
    // 假设本迭代轮次的第一个值为数组最小值
    minIdx = i
    // 内循环，与后面数据进行比较
    for (let j = i + 1; j < length; j++) {
      // 找出最小值索引
      if (predicateSwap(copyArray[minIdx], copyArray[j])) {
        minIdx = j
      }
    }
    // 本次外循环迭代的索引是否发生改变
    if (i !== minIdx) {
      swap(copyArray, i, minIdx)
    }
  }

  return copyArray
}