// How many times the snake moves per second
export const SNAKE_SPEED = 2

// Create snake body at center coordinate of grid
const snakeBody = [{x: 11, y: 11}]

export function update() {
    console.log('update snake')
}

export function draw(gameBoard) {

    // For each element in snake body array...
    snakeBody.forEach(segment => {

        // Create a div for the snake segment
        const snakeElement = document.createElement('div')

        // Use style to set x and y coordinate
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y

        // Add snake class to make visible
        snakeElement.classList.add('snake')

        // Add segment to game board
        gameBoard.appendChild(snakeElement)
    })
}