import fetch from 'node-fetch'

//creating your own promise
const myFunction = (name: any, age: any) => {
    const myPromise = new Promise((resolve, reject) => {
        if (typeof (name) === 'string' && typeof (age) === 'number') {
            resolve(
                {
                    name: name,
                    age: age
                }
            )
        }
        else {
            reject("Name should be a string and age should be a number")
        }
    })
    return myPromise;
}
// sleep function to pause the code
const sleep = (time: number) => {
    const sleepPromise = new Promise((resolve) =>
        setTimeout(resolve, time)
    )
    return sleepPromise
}

const myAsyncFunction = async () => {
    console.log('abc')
    await sleep(20000)     //sleep
    console.log('def')
    myFunction('Simi', 27)
        .then((data) => console.log(data))
        .catch((error) => console.log(error))

    console.log('ghi');

}
myAsyncFunction();



const simiFetch = async (url: string) => {
    const fetchData = fetch(url)
    console.log(fetchData)
    fetchData
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
}

simiFetch('https://jsonplaceholder.typicode.com/todos')


