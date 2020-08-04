//Generics

const ABC = <T>(input: T): T => {
    return input;
}
console.log(ABC('some string'))
console.log(ABC(true))
console.log(ABC(20))

interface ABC {
    a: string,
    b: string,
    c: number,
    d?: boolean, //means d is optional
    e: number
}

//Omit
type withoutB = Omit<ABC, "b" | "c">
const someFn = (input: withoutB) => {
    console.log(input)
    return input;
}
someFn({
    a: 'Simi',
    e: 27
})

//Pick
type withABD = Pick<ABC, "a" | "b" | "d">

const someOtherFn = (input: withABD) => {
    return input.b
}
console.log(someOtherFn({
    a: "string",
    b: "some other string",
    d: false
}))