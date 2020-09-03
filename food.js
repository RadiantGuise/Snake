import { onSnake, expandSnake } from './snake.js'

let food = { x: 10, y: 1 }

// Rate Snake grows when eating food
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = { x: 20, y: 10 }
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