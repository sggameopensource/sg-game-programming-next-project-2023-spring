import * as U from './util'

describe('makeArray', () => {
  it('returns an array of specified length', () => {
    const result = U.makeArray(5)
    expect(result).toHaveLength(5)
  })

  it('returns an array filled with null values', () => {
    const result = U.makeArray(5)
    expect(result).toEqual([null, null, null, null, null])
  })
})

describe('range', () => {
  it('returns an array of numbers between the specified range', () => {
    const result = U.range(1, 6)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('returns an empty array if min and max are the same', () => {
    const result = U.range(3, 3)
    expect(result).toEqual([])
  })
})

describe('random', () => {
  it('returns a number between the specified range', () => {
    const result = U.random(1, 6)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(5)
  })

  it('returns the minimum value if min and max are the same', () => {
    const result = U.random(3, 3)
    expect(result).toBe(3)
  })
})