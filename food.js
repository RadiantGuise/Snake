import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()

// Rate Snake grows when eating food
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {

    // Create a div for the snake segment
    const foodElement = document.createElement('div')

    // Use style to set x and y coordinate
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x

    // Add snake class to make visible
    foodElement.classList.add('food')

    // Add segment to game board
    gameBoard.appendChild(foodElement)
}

// Create a random food position that is not already on the Snake's position
function getRandomFoodPosition() {
    let newFoodPosition

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}