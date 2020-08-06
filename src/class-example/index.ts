class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    calculateArea = () => {
        return this.height * this.width;
    }
    get area() {
        return this.calculateArea()
    }
}

const square = new Rectangle(10, 10)
console.log(square.area)
const rect = new Rectangle(20, 10)
console.log(rect.area)