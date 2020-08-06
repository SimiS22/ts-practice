const familyTrees = [
    {
        person: 'GrandGrandGuy',
        children: [
            {
                person: 'GrandGuy',
                children: [
                    {
                        person: 'Guy',
                        children: [
                            {
                                person: 'ADaughter',
                                children: [
                                    {
                                        person: 'SomeName'
                                    },
                                    {
                                        person: 'SomeOne'
                                    }
                                ]
                            }

                        ]
                    }
                ]
            }
        ]
    },
    {
        person: 'GrandGrandGal',
        children: [
            {
                person: 'GrandGal',
                children: [
                    {
                        person: 'Gal',
                        children: [
                            {
                                person: 'ASon',
                                children: [
                                    {
                                        person: 'SomeOtherName'
                                    },
                                    {
                                        person: 'Somebody'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
];
// export const findNames = (inputArr: any[]) => {

//     const output = inputArr.reduce((accumulator: string[], currentValue) => {
//         accumulator.push(currentValue.person)
//         if (Array.isArray(currentValue.children)) {
//             currentValue.children.map((element: any) => {
//                 return accumulator.push(element.person)
//             })
//         }
//         else {
//             return;
//         }
//         return accumulator
//     }, [])
//     console.log(output)
//     return output
// }
const getPersons = (inputArr: any[]) => {
    let output = inputArr.reduce((accumulator, currentValue) => {
        console.log(currentValue)
        if (Array.isArray(currentValue.children)) {
            getPersons(currentValue.children)
        }
        else {
            accumulator.push(currentValue.person)
        }
        accumulator.push(currentValue.person);
        console.log(accumulator)
        return accumulator
    }, [])
    console.log(output)

    return output
}

console.log(getPersons(familyTrees))