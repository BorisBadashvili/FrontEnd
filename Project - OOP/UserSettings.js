// Snake Speed to Local Storage.
function saveSnakeSpeed() {
    storage.setItem('speed', JSON.stringify(speed))
}
// Snake body to local Storage.
function saveSnakeBlock() {
    storage.setItem('snakeBlock', snakeBlockId.value)
    // storage.setItem('snakeBlock', JSON.stringify(snakeBlockId.value))
}
// Board W/H to Local Storage.
function saveBoard() {
    storage.setItem('boardW', boardW.value)
    storage.setItem('boardH', boardH.value)
}
// FoodQuantity to Local Storage.
function saveFood() {
    storage.setItem('foodQuantity', foodQuantity.value)
}
// HighScore to Local Storage.
function saveHighScore() {
    if(score > highScore)
        storage.setItem('highScore', score)
}
// Function bundle

let saveUserSettings = function() {
    saveFood();
    saveSnakeSpeed();
    saveSnakeBlock();
    // saveBoard();
}