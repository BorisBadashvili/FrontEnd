let num = (Number(prompt("Pick a number")));
let num1 = (Number(prompt("Pick a second number")));

let operator = prompt("What operator do you want to use? +, -, * or /")

switch (operator) {
    case "+":
        alert(num + num1);    
        break;
    case "-":
        alert(num - num1);    
        break;
    case "*":
        alert(num * num1);    
        break;
    case "/":
        alert(num / num1);    
        break;
    default:
        alert("Whatever");
}