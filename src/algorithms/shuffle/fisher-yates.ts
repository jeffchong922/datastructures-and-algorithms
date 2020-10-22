import { getRandomInt, swap } from '../../util'

/**
 * 迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换
 * 
 * 洗扑克牌的次数越多，随机效果越差
 */
export function fisherYates<T> (array: Array<T>): Array<T> {
  const copyArray = array.slice()

  for (let i = copyArray.length - 1; i > 0; i--) {
    const randomIdx = getRandomInt(i + 1)
    swap(copyArray, i, randomIdx)
  }

  return copyArray
}