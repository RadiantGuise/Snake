import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {

    if (gameOver) {
        if (confirm('You lost! Press OK to restart.')) {
            window.location = '/'
        }

        return
    }

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
    checkDeath()
}

function draw() {

    // Clear previous Snake position
    gameBoard.innerHTML = ''

    // Draw updated Snake position
    drawSnake(gameBoard)

    // Draw food
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}