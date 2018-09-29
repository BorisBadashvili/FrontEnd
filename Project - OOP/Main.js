let snake = new Snake()
let food = new Food()

//  Direction function

let changeDirection = function (event) {
    let eventKeyCode = event.keyCode

    switch (eventKeyCode) {
        case 37: // left arrow
            snake.movementX = -10
            snake.movementY = 0
            break;
        case 38: // up arrow
            snake.movementX = 0
            snake.movementY = 10
            break;
        case 39: // right arrow
            snake.movementX = 10
            snake.movementY = 0
            break;
        case 40: // down arrow
            snake.movementX = 0
            snake.movementY = -10
            break;
    }
}

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Take a look at this.
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// endGame function

function didGameEnd() {
    for (let i = 1; i < snake.body.length; i++) {
        const didCollide = snake.body[i].x === snake.body[0].x && snake.body[i].y === snake.body[0].y
        if (didCollide) return true
    }
    const hitLeftWall = snake.body[0].x < 0;
    const hitRightWall = snake.body[0].x > myCanvas.width - 10;
    const hitToptWall = snake.body[0].y < 0;
    const hitBottomWall = snake.body[0].y > myCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

//  ---------------------
let main = function () {
    if(didGameEnd()) {
        ctx.fillStyle = "grey"; 
        ctx.fillRect(0, 0, canvasWidth, canvas.height); // Take a look at this.
        saveHighScore();
        return;
    }
    setTimeout(function onTick() {
        clearCanvas();
        food.drawFood();
        // food.createFood();  
        snake.drawSnake();
        snake.snakeMovement();
        main();
    }, speed)
}
food.createFood();


 
// Function Calls and EventListeners 

startGame.addEventListener('click', getUserSettings)
document.addEventListener("keydown", changeDirection)
document.querySelector("#save").addEventListener('click', saveUserSettings)
document.querySelector("#novice").addEventListener("click", () => {speed = 200})
document.querySelector("#Intermediate").addEventListener("click", () => {speed = 100})
document.querySelector("#Expert").addEventListener("click", () => {speed = 50})

