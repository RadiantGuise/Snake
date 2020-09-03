import { getInputDirection } from "./input.js"

// How many times the snake moves per second
export const SNAKE_SPEED = 5

// Create snake body at center coordinate of grid
const snakeBody = [{x: 11, y: 11}]

export function update() {

    const inputDirection = getInputDirection()
    // As the snake "head" moves, each body segment shifts into the previos segment's position
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // Update snake head position
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {

    // For each element in snake body array...
    snakeBody.forEach(segment => {

        // Create a div for the snake segment
        const snakeElement = document.createElement('div')

        // Use style to set x and y coordinate
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x

        // Add snake class to make visible
        snakeElement.classList.add('snake')

        // Add segment to game board
        gameBoard.appendChild(snakeElement)
    })
}