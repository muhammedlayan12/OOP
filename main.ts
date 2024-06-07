import inquirer from 'inquirer';

class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(`This is a ${this.name}`);
    }

    calculateArea() {
        console.log("Calculating area...");
        return 0;
    }

    calculatePerimeter() {
        console.log("Calculating perimeter...");
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Square extends Shape {
    sideLength: number;

    constructor(sideLength: number) {
        super("Square");
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength * this.sideLength;
    }

    calculatePerimeter() {
        return 4 * this.sideLength;
    }
}

async function main() {
    const shapeChoice = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square']
    });

    if (shapeChoice.shape === 'Circle') {
        const { radius } = await inquirer.prompt({
            type: 'number',
            name: 'radius',
            message: 'Enter the radius of the circle:'
        });
        const circle = new Circle(radius);
        circle.display();
        console.log("Area:", circle.calculateArea());
        console.log("Perimeter:", circle.calculatePerimeter());
    } else if (shapeChoice.shape === 'Square') {
        const { sideLength } = await inquirer.prompt({
            type: 'number',
            name: 'sideLength',
            message: 'Enter the side length of the square:'
        });
        const square = new Square(sideLength);
        square.display();
        console.log("Area:", square.calculateArea());
        console.log("Perimeter:", square.calculatePerimeter());
    }
}

main();
