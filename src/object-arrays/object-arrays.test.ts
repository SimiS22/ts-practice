import { arraySorting1, arraySorting2, ageSum1, ageSum2, arrayToObject1, arrayToObject2, indexOfObject, incrementAge, differenceArray, removeDuplicates } from './index'

const testObjectArray = [{ name: 'Simi', age: 27 }, { name: 'Chintu', age: 30 }, { name: 'Mithin', age: 25 }]

describe('Array Sorting - Decending age order', () => {
    it('should sort the array based on decending age for an object array', () => {
        expect(arraySorting1([{ name: 'Simi', age: 27 }, { name: 'Chintu', age: 30 }, { name: 'Mithin', age: 25 }]))
            .toStrictEqual([{ name: 'Chintu', age: 30 }, { name: 'Simi', age: 27 }, { name: 'Mithin', age: 25 }])
        // array-sorting mutates the input array
    })
})

describe('Array Sorting - Youngest person', () => {
    it('should return the youngest person from the given input array', () => {
        expect(arraySorting2([{ name: 'Simi', age: 27 }, { name: 'Chintu', age: 30 }, { name: 'Mithin', age: 25 }]))
            .toStrictEqual({ name: 'Mithin', age: 25 })
    })
})

describe('Sum of ages of an object array', () => {
    it('should return the sum of ages from an in input object array', () => {
        expect(ageSum1(testObjectArray))
            .toStrictEqual(82)
    })
})

describe('Sum of ages less than 30 of an object array', () => {
    it('should return the sum of ages less than 30 from an in input object array', () => {
        expect(ageSum2(testObjectArray))
            .toStrictEqual(52)
    })
})

describe('Array to Object conversion', () => {
    it('should return a single object with keys "names" and "ages" from an object array', () => {
        expect(arrayToObject1([{ name: 'Simi', age: 27 }, { name: 'Chintu', age: 30 }, { name: 'Mithin', age: 25 }]))
            .toStrictEqual({ names: ['Simi', 'Chintu', 'Mithin'], ages: [27, 30, 25] })
    })
})

describe('Array to Object conversion', () => {
    it('should return a single object with keys "names" and "ages"(squared ages) from an object array', () => {
        expect(arrayToObject2([{ name: 'Simi', age: 27 }, { name: 'Chintu', age: 30 }, { name: 'Mithin', age: 25 }]))
            .toStrictEqual({ names: ['Simi', 'Chintu', 'Mithin'], ages: [729, 900, 625] })
    })
})

describe('Index of an object of an object array', () => {
    it('should return index of an object from the object array', () => {
        expect(indexOfObject(testObjectArray, { name: 'Mithin', age: 25 })).toStrictEqual(2)
    })
})

describe('Increment the age by 1', () => {
    it('should increment the age of person in the object array by 1', () => {
        expect(incrementAge(testObjectArray)).toStrictEqual([{ name: 'Simi', age: 28 }, { name: 'Chintu', age: 31 }, { name: 'Mithin', age: 26 }])
    })
})

describe('Difference between 2 arrays', () => {
    it('should return a difference array', () => {
        expect(differenceArray([1, 2, 3, 4, 5, 6], [1, 3, 5])).toStrictEqual([2, 4, 6]);
        expect(differenceArray([{ name: 'Simi' }, { name: 'Chintu' }, 2, 4, 6, 5], [{ name: 'Chintu' }, 2, 4]))
    })
})

describe('Remove duplicates from an array', () => {
    it('should return an output array without any duplicates', () => {
        expect(removeDuplicates([1, 2, 3, 4, 4, 4, 5, 6, 6])).toStrictEqual([1, 2, 3, 4, 5, 6])
        expect(removeDuplicates([1, 4, 4, 5, 6, { name: 'Simi' }, { name: 'Chintu' }, { name: 'Simi' }])).toStrictEqual([1, 4, 5, 6, { name: 'Simi' }, { name: 'Chintu' }])
    })
})