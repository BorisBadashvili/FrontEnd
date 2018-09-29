container1 = document.querySelector(".container1")
container2 = document.querySelector(".container2")
container3 = document.querySelector(".container3")
container4 = document.querySelector(".container4")

holder1 = document.querySelector(".holder1")
holder2 = document.querySelector(".holder2")
holder3 = document.querySelector(".holder3")

button = document.querySelector(".myButton")

button.addEventListener("click", giveColor)

let color1, color2, color3;

container1.addEventListener("click", colorSaver)
container2.addEventListener("click", colorSaver1)
container3.addEventListener("click", colorSaver2)

function colorSaver(container1) {
    
    color1 = window.getComputedStyle(container1.target, null).getPropertyValue("background-color");

}
function colorSaver1(container2) {
    
    color2 = window.getComputedStyle(container2.target, null).getPropertyValue("background-color");

}
function colorSaver2(container3) {
    
    color3 = window.getComputedStyle(container3.target, null).getPropertyValue("background-color");

}

function giveColor (){

    holder1.style.backgroundColor = color1
    holder2.style.backgroundColor = color2
    holder3.style.backgroundColor = color3

}



