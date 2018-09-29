// Variable across all files.

const canvas = document.querySelector("#myCanvas")
const ctx = canvas.getContext("2d")
let canvasWidth = canvas.width
let canvasHeight = canvas.height
let storage = window.localStorage
let speed = 250
let score = 0
let startGame = document.querySelector("#startGame")
let snakeBlock
let snakeBlockId = document.querySelector("#snakeBlock")
let bW = document.querySelector("#boardW")
let bH = document.querySelector("#boardH")
let foodQuantity = document.querySelector("#food")
let foodAmount

// let snakeBlock = document.querySelector("#snakeBlock").value

//  --------------------------------------------------------------------------------------

// BoardOMeter -- Checking if there is avaliable value for (board W/H) in LocalStorage
let boardOMeter = function () {
    canvasWidth = parseInt(localStorage.getItem("boardW"))
    canvasHeight = parseInt(localStorage.getItem("boardH"))
}
boardOMeter()
// SpeedOMeter -- Checking if there is avaliable value for speed in LocalStorage
let speedOMeter = function () {
    if (localStorage.getItem('speed') !== null) {
        speed = parseInt(localStorage.getItem("speed"))
    } else {
        speed = 200
        return speed
    }
}

// SnakeOMeter -- Checking if there is avaliable value for snakeBlock in LocalStorage
let snakeBlockFunc = function () {
    for (let i = 1; i < snakeBlock; i++) {
        snake.body.push({
            x: snake.body[0].x + i,
            y: snake.body[0].y
        })
    }
}

let SnakeOMeter = function () {
    if (localStorage.getItem('snakeBlock') !== null) {
        snakeBlock = parseInt(storage.getItem("snakeBlock"))
        snakeBlockFunc();
    }

}

// FoodOMeter --  Checking if there is avaliable value for FoodQuantity in LocalStorage
let foodOMeter = function() {
    if(localStorage.getItem('foodQuantity') !== null) {
        foodAmount = parseInt(storage.getItem('foodQuantity'))
        console.log(foodAmount);
    }
}


// Function Bundle 

let getUserSettings = function () {
    foodOMeter();
    SnakeOMeter();
    speedOMeter();
    main();
    // boardOMeter();
}