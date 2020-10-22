import { fisherYates } from "./fisher-yates"

describe('FisherYates', () => {
  const SIZE = 10000

  function createSortedArray (): Array<number> {
    const array: Array<number> = [];
    for (let i = 1; i <= SIZE; i++) {
      array.push(i)
    }
    return array
  }

  it('对于空数组', () => {
    expect(fisherYates([])).toEqual([])
  })

  it('对于单个值的数组', () => {
    const array = [1]
    expect(fisherYates(array)).toEqual(array)
  })

  it('对于排序过的数组', () => {
    let array = createSortedArray()
    const sortedArray = createSortedArray()

    array = fisherYates(array);

    expect(array).not.toEqual(sortedArray);
  })
})