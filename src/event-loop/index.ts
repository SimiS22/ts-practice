const firstFunction = () => {
    console.log('First')
    return 'First'
};
const secondFunction = () => {
    setTimeout(() => {
        console.log('Second');
    }, 2000)
    return 'Second'
}
const thirdFunction = () => {
    console.log('Third')
    return 'Third'
}
firstFunction();
secondFunction();
thirdFunction();

