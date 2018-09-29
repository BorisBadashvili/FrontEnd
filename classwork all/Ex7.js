function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function () {
        this.value += Number(prompt("enter your number"))
    }
}

let accumulator = new Accumulator(5)

