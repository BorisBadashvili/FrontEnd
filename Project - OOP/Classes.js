//  Snake 
//            Class 
class Snake {
    constructor() {
        this.body = [{
                x: 120,
                y: 100
            },
        ];
        this.movementX = 10
        this.movementY = 0
        this.block = 10;
    };
    snakeMovement() {
        let head = {
            x: this.body[0].x + this.movementX,
            y: this.body[0].y - this.movementY
        };
        this.body.unshift(head)

        const didEatFood = this.body[0].x === food.foodX && this.body[0].y === food.foodY

        if (didEatFood) {
            score += 10
            // document.querySelector("#score").innerHTML = "Score :" + "  " + score
            food.createFood();
        } else {
            snake.body.pop()
        }
    };

    drawSnake() {
        for (let i = 0; i < this.body.length; i++) {
            this.body.forEach(() => {
                ctx.fillStyle = 'black';
                ctx.strokeStyle='red';
                ctx.fillRect(this.body[i].x, this.body[i].y, this.block, this.block)
                ctx.strokeRect(this.body[i].x, this.body[i].y, this.block, this.block)
            })
        }
    };
}

//  ----------------------------------------------------------------------------------------------------------------------------------------

// Food
//       Class
class Food {
    constructor() {
        this.block = 10;
        this.foodX
        this.foodY 
    };

    randomFood(min, max) {
        return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    };

    createFood() {
        this.foodX = this.randomFood(0, canvas.width - 10);
        this.foodY = this.randomFood(0, canvas.width - 10);

        snake.body.forEach( (part) => {
            const foodIsOnSnake = part.x === this.foodX && part.y == this.foodY  
            if (foodIsOnSnake) {

                this.foodX = this.randomFood(0, canvas.width - 10);
                this.foodY = this.randomFood(0, canvas.width - 10);

                this.createFood();
            }
        })
    }
    
    drawFood() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.foodX, this.foodY, this.block, this.block);
        ctx.strokeRect(this.foodX, this.foodY, this.block, this.block);
    };

}