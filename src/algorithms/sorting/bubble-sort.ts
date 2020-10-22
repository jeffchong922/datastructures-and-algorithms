import { defaultPredicateSwap, swap } from "../../util"
import { IPredicateSwap } from "./sorting.interface"

export function bubbleSort<T> (array: Array<T>, predicateSwap: IPredicateSwap<T> = defaultPredicateSwap): Array<T> {
  const copyArray = array.slice()
  const { length } = copyArray

  // 外循环，表示已经排序过的个数
  for (let i = 0; i < length; i++) {
    // 内循环，元素进行冒泡
    for (let j = 0; j < length - 1; j++) {
      // 决定元素是否进行交换
      if (predicateSwap(copyArray[j], copyArray[j + 1])) {
        swap(copyArray, j, j + 1)
      }
    }
  }

  return copyArray
}