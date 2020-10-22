export function testSortAlgorithm (
  sortAlgorithm: Function,
  algorithmName: string
) {
  describe(algorithmName, () => {
    const SIZE = 10000

    function createNonSortedArray (): Array<number> {
      const array: Array<number> = []
      for (let i = SIZE; i > 0; i--) {
        array.push(i)
      }
      return array
    }

    function createSortedArray (): Array<number> {
      const array: Array<number> = [];
      for (let i = 1; i <= SIZE; i++) {
        array.push(i)
      }
      return array
    }

    it('对于空数组', () => {
      expect(sortAlgorithm([])).toEqual([])
    })

    it('对于排序过的数组', () => {
      let array = createSortedArray()
      const sortedArray = createSortedArray()

      const start = process.uptime()
      array = sortAlgorithm(array);
      console.log(`${algorithmName} 对于 ${SIZE} 条数据，执行排序过的数组耗时：${process.uptime() - start}`)

      expect(array).toEqual(sortedArray);
    })

    it('对于未排序过的数组', () => {
      let array = createNonSortedArray();
      const sortedArray = createSortedArray();

      const start = process.uptime()
      array = sortAlgorithm(array);
      console.log(`${algorithmName} 对于 ${SIZE} 条数据，执行未排序过的数组耗时：${process.uptime() - start}`)

      expect(array).toEqual(sortedArray);

      for (let i = 0; i < array.length - 1; i++) {
        expect(array[i] <= array[i + 1]).toBeTruthy();
      }
    })
  })
}