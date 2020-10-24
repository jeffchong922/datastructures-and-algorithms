import { defaultSelectTheLeftOne, getRandomInt, getSumMiddleInt, swap } from "../../util"
import { ISelectTheLeftOne } from "./sorting.interface"

/**
 * 快速排序使用分而治之的方法，将原始数组分为较小的数组
 * （但它没有像归并排序那样将它们分割开）
 * 
 * 首先，从数组中选择一个值作为 **主元**
 * 
 * 创建两个指针，左边一个指向数组第一个值，右边一个指向数组最后一个值。
 * 移动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，
 * 然后交换它们，重复这个过程，直到左指针超过了右指针。
 * 这一步叫作 **划分**
 * 
 * 接着，算法对划分后的小数组复之前的两个步骤，直至数组已完全排序
 * 
 * 复杂度为 O(nlog(n))
 */
export function quickSort<T> (array: T[], selectTheLeftOne: ISelectTheLeftOne<T> = defaultSelectTheLeftOne): T[] {
  const copayArray = array.slice()
  return quick(copayArray, 0, copayArray.length - 1, selectTheLeftOne)
}

function quick<T> (array: T[], leftIdx: number, rightIdx: number, selectTheLeftOne: ISelectTheLeftOne<T>) {
  // 索引值，区别左边与右边
  let idx

  if (array.length > 1) {
    idx = partition(array, leftIdx, rightIdx, selectTheLeftOne)

    // 对划分后的小数组复之前的两个步骤，直至数组已完全排序
    if (leftIdx < idx - 1) {
      quick(array, leftIdx, idx - 1, selectTheLeftOne)
    }
    if (idx < rightIdx) {
      quick(array, idx, rightIdx, selectTheLeftOne)
    }
  }

  return array
}

/**
 * 划分过程
 * 
 * 返回区分左边与右边的索引值
 */
function partition<T> (array: T[], leftIdx: number, rightIdx: number, selectTheLeftOne: ISelectTheLeftOne<T>) {
  // 选择主元
  // const position = getRandomInt(rightIdx + 1, leftIdx)
  const position = getSumMiddleInt(leftIdx, rightIdx)
  const pivot = array[position]
  let i = leftIdx
  let j = rightIdx

  // 直到左指针超过了右指针
  while (i <= j) {
    // 查找需要待在主元右边的值
    while (selectTheLeftOne(array[i], pivot)) {
      i++
    }
    // 查找需要待在主元左边边的值
    while (selectTheLeftOne(pivot, array[j])) {
      j--
    }
    // 交换
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }

  // 在划分操作结束后，返回左指针的索引
  return i
}