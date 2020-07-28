import { arrayFlattening1, arrayFlattening2, arrayMapping1, arraySum, arrayFiltering1, arrayFiltering2, arrayMapping2 } from './index'

describe('Array Flattening', () => {
    it('should return a new output array with values in the input array', () => {
        expect(arrayFlattening1([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    })
})

describe('Array Flatening for an array of number arrays', () => {
    it('should return an output array of numbers', () => {
        expect(arrayFlattening2([[1, 2], [3, 4], [5, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6])
    })
})

describe('Array mapping - Square of numbers in an array', () => {
    it('should return an output array which has square of numbers in the input array', () => {
        expect(arrayMapping1([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 9, 16, 25])
    })
})

describe('Sum of numbers in an array', () => {
    it('should return the sum of numbers in an array', () => {
        expect(arraySum([1, 2, 3, 4, 5])).toStrictEqual(15)
    })
})

describe('Filter even numbers from an array', () => {
    it('should filter out the even numbers from an input array', () => {
        expect(arrayFiltering1([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([2, 4, 6])
    })
})

describe('Filter even numbers from a mixed array', () => {
    it('should filter out the even numbers from an input array of numbers and strings', () => {
        expect(arrayFiltering2([1, 2, 'simi', 3, 'chintu', 4])).toStrictEqual([2, 4])
    })
})

describe('Array Mapping based on the first letter of a string in an array', () => {
    it('should return true if the string starts with a vowel, else return false', () => {
        expect(arrayMapping2(['simi', 'chintu', 'amma', 'mithu', 'acha', 'unnimol'])).toStrictEqual([false, false, true, false, true, true])
    })
})