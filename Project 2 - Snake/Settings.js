let speed = 50

document.querySelector("#novice").addEventListener("click", () => {
    speed = 250
    console.log(speed);
} )

document.querySelector("#intermediate").addEventListener("click", () => {
    speed = 150
    console.log(speed);
} )

document.querySelector("#hard").addEventListener("click", () => {
    speed = 80
    console.log(speed);
} )