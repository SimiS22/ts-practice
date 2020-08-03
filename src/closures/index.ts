//Example 1

const calculatePoints = (name: string) => {
    let points = 0;
    const up = () => {
        return console.log(`${name} has ${++points} points`);
    };
    const down = () => {
        return console.log(`${name} has ${--points} points`);
    };
    return { up, down };
};
const simi = calculatePoints('Simi');
const chintu = calculatePoints('Chintu')
simi.up();
simi.up();
simi.down();
simi.up();
chintu.up();
simi.up();

//Example 2

const balance = (balanceAmount: number) => {
    let accountBalance = balanceAmount;
    const deposit = (depositAmount: number) => {
        return accountBalance += depositAmount;
    }
    const withdraw = (withdrawAmount: number) => {
        return accountBalance -= withdrawAmount;
    }
    return { deposit, withdraw }
}
const amount = balance(1000);
// tslint:disable-next-line: no-console
console.log(amount.deposit(500))
console.log(amount.deposit(500))
console.log(amount.deposit(500))
console.log(amount.withdraw(1000))