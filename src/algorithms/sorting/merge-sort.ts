import { defaultSelectTheLeftOne } from "../../util";
import { ISelectTheLeftOne } from "./sorting.interface";

/**
 * 归并排序是一种分而治之算法。
 * 其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，
 * 接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组
 * 
 * 由于是分治法，归并排序也是递归的
 * 
 * 复杂度为 O(nlog(n))
 */
export function mergeSort<T> (array: T[], selectTheLeftOne: ISelectTheLeftOne<T> = defaultSelectTheLeftOne): T[] {
  let mergedArray = array.slice()
  const { length } = array

  // 将一个大数组转化为多个小数组直到其中只有一个项
  if (length > 1) {
    // 找到数组的中间位
    const middle = Math.floor(length / 2)
    // 递归直至只有一项
    const left = mergeSort(array.slice(0, middle), selectTheLeftOne)
    const right = mergeSort(array.slice(middle, length), selectTheLeftOne)
    // 合并和排序小数组来产生大数组，排序发生在归并过程中
    mergedArray = merge(left, right, selectTheLeftOne)
  }

  return mergedArray
}

/**
 * 负责合并和 **排序** 小数组来产生大数组
 */
function merge<T> (left: T[], right: T[], selectTheLeftOne: ISelectTheLeftOne<T>): T[] {
  let i = 0
  let j = 0
  // 排序及合并过后的结果
  const result: T[] = []

  // 循环直至任意一方数组掏空
  while (i < left.length && j < right.length) {
    // 根据选取规则进行排序添加
    result.push(
      selectTheLeftOne(left[i], right[j])
        ? left[i++]
        : right[j++]
    )
  }

  // 获取未添加进结果的数据，由于归并排序从一至多，所以剩下的必然是排序过的
  return result.concat(
    i < left.length
      ? left.slice(i)
      : right.slice(j)
  )
}