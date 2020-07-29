interface inputObj {
    name: string,
    age: number
}

export const arraySorting1 = (inputArr: inputObj[]) => {
    return inputArr.sort((a, b) => {
        return b.age - a.age;
    })
}

export const arraySorting2 = (inputArr: inputObj[]) => {
    let acendingAgeArray = inputArr.sort((a, b) => {
        return a.age - b.age;
    })
    return acendingAgeArray[0]
}

export const ageSum1 = (inputArr: inputObj[]) => {
    return inputArr.reduce((accumulator: number, currentValue: inputObj) => {
        const sum = accumulator + currentValue.age;
        return sum;
    }, 0)
}

export const ageSum2 = (inputArr: inputObj[]) => {
    return inputArr.reduce((accumulator: number, currentValue: inputObj) => {
        const sum = currentValue.age < 30 ? accumulator + currentValue.age : accumulator;
        return sum;
    }, 0)
}

export const arrayToObject1 = (inputArr: inputObj[]) => {
    const namesArray = inputArr.map((element) => element.name);
    const agesArray = inputArr.map((element) => element.age);
    return { names: namesArray, ages: agesArray }
}

export const arrayToObject2 = (inputArr: inputObj[]) => {
    const namesArray = inputArr.map((element) => element.name);
    const agesArray = inputArr.map((element) => Math.pow(element.age, 2));
    return { names: namesArray, ages: agesArray }
}

export const indexOfObject = (inputArr: inputObj[], searchObject: inputObj) => {
    return inputArr.findIndex((element) => JSON.stringify(element) === JSON.stringify(searchObject));
}

export const incrementAge = (inputArr: inputObj[]) => {
    return inputArr.map((element) => {
        return { name: element.name, age: element.age + 1 }
    })
}

export const differenceArray = (inputArr1: any[], inputArr2: any[]) => {
    return inputArr1.filter((elememt) => {
        let duplicate = inputArr2.find((ele) => {
            return JSON.stringify(elememt) === JSON.stringify(ele);
        })
        return duplicate === undefined ? true : false;
    })
}

export const removeDuplicates = (inputArr: any[]) => {
    return inputArr.reduce((accumulator, currentValue) => {
        let nonDuplicates = accumulator.find((element: any) => {
            return JSON.stringify(element) === JSON.stringify(currentValue)
        });
        nonDuplicates === undefined ? accumulator.push(currentValue) : accumulator;
        return accumulator;
    }, [])
}
