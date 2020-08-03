const firstName = 'Simi';
const age = 27;
const city = 'Hamburg'

const getPersonInfo = () => {
    const firstName = 'Chintu';
    const age = 30;
    return `${firstName} is ${age} and lives in ${city}`;
    //local/function scope has reference to variables firstName and age. So it goes down the scope chain to global context object
}

console.log(getPersonInfo())

//blocked scope

const findSeniorCitizen = () => {
    if (age > 60) {
        const message = `You are a senior-citizen.`
        return message;
    }
    else {
        const message = `You are not a senior-citizen.`
        return message;
    } //variable message has a blocked scope and hence the variable can be reused
}
console.log(findSeniorCitizen())