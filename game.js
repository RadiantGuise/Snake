import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {

    // Loops game state constantly
    window.requestAnimationFrame(main)

    // Console.log this to see render time between animations in seconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    // If secondsSinceLastRender is less than the time between renders, we don't need to move our snake
    // Will render only twice per second
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    // Update all of the logic to the game (snake's position, food eaten, game loss, etc)
    update()

    // Draw everything to screen based on the update
    draw()
}

// Start initial main loop
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {

    // Clear previous Snake position
    gameBoard.innerHTML = ''

    // Draw updated Snake position
    drawSnake(gameBoard)

    // Draw food
    drawFood(gameBoard)
}