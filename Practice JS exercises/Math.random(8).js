let randomNumber = Math.floor(Math.random() * 11 );
console.log(randomNumber)
let userNumber = (Number(prompt("Choose a number from 1 to 10")));

if  (randomNumber == userNumber) {
    (prompt("Good Work."));
} else {
    prompt("Not matched. Correct number was " + randomNumber)
}

