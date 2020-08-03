const someObject = {
    name: 'Some Name',
    address: {
        street: 'some street',
        city: 'some city'
    }
}
const houseNumber = someObject.address?.houseNumber;
console.log(houseNumber)
