// Declairing variable for username as a userName, following with an if statements.
let userName = prompt("Enter your name");
let password;   
if (userName == "Admin") {
    password = prompt("Enter your password please")
}   else if (userName !== "Admin") {
    alert ("I don't know you.")
}   else if (userName === null){
    alert("Canceled.")
}   //Checking password for the match, using already declared variable with const in the above if statement.
debugger;
if (password == "TheMaster") {
    alert("Welcome")
} else if (password !== "TheMaster"){
    alert("Wrong Password")
}