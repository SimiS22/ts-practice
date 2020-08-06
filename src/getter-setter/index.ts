//get example
const obj = {
    log: ['a', 'b', 'c', 'd'],
    get latest() {
        return this.log.length === 0 ? 'undefined' : this.log[this.log.length - 1];
    }
}
console.log(obj.latest)

//set example

const language = {
    log: [],
    set current(name: string) {
        this.log.push(name);
    }
}
language.current = 'EN'
language.current = 'DE'
console.log(language.log)