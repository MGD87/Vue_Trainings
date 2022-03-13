//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const square = (a) => a * a;

console.log(square(5));

//Bei arrow functions bildet sich das this nicht an das äußere Objekt in der es aufgerufen wird
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName() {
        return `${this.manufacturer} ${this.model}`;
    },
};

console.log(car.fullName());
