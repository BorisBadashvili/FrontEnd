function Calculator() {
    this.read = function () {
        this.num1 = Number(prompt("Enter first number"));
        this.num2 = Number(prompt("Enter second number"));
    };

    this.sum = function () {
        return this.num1 + this.num2;
    };

    this.mul = function () {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());