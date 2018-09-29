const canvas = document.querySelector("#myCanvas")
const ctx = canvas.getContext("2d")


let dx = 10
let dy = 0
let foodX
let foodY
let score = 0

let snake = [{
        x: 190,
        y: 150
    },
    {
        x: 200,
        y: 150
    },
    {
        x: 210,
        y: 150
    },
];

function clearCanvas() { // used
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function createFood() {
    foodX = randomTen(0, canvas.width - 10);
    foodY = randomTen(0, canvas.height - 10);
    
    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY
        if (foodIsOnSnake)
        createFood();
    });
}

function drawFood() {
    ctx.fillStyle = 'green';
    ctx.strokestyle = 'red';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

let drawSnakePart = function (snakePart) {
    ctx.fillStyle = 'black';
    ctx.strokestyle = 'darkgreen';

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() { // used
    snake.forEach(drawSnakePart);
}

let snakeMove = function () {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y - dy
    };
    snake.unshift(head)
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY
    if (didEatFood) {
        createFood();
        score += 10
        document.querySelector("#score").innerHTML = "Score :" + "  " + score
    } else {
        snake.pop()
    }
}

// Direction 

let changeDirection = function (event) {
    let eventKeyCode = event.keyCode
    console.log(eventKeyCode);

    switch (eventKeyCode) {
        case 37: // left arrow
            dx = -10
            dy = 0
            break;
        case 38: // up arrow
            dx = 0
            dy = 10
            break;
        case 39: // right arrow
            dx = 10
            dy = 0
            break;
        case 40: // down arrow
            dx = 0
            dy = -10
            break;
    }
}

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (didCollide) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > myCanvas.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > myCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function main() {
    if (didGameEnd()) return;
    setTimeout(function onTick() {
        clearCanvas();
        drawFood();
        snakeMove();
        drawSnake();
        // Call main again
        main();
    }, speed)
}

createFood()
main()
console.log(myCanvas);
document.addEventListener("keydown", changeDirection)