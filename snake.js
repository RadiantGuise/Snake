import { getInputDirection } from "./input.js"

// How many times the snake moves per second
export const SNAKE_SPEED = 5

// Create snake body at center coordinate of grid
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

export function update() {
    addSegments()

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

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false} = {}) {
    
    // Loop through each Snake segment to see if its position is the same as a food's position
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index ===0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true } )
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

// Takes the last segment of the snake and duplicates it onto the last position
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]})
    }

    newSegments = 0
}