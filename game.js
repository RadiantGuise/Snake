let lastRenderTime = 0

// How many times the snake moves per second
const SNAKE_SPEED = 2

function main(currentTime) {

    // Loops game state constantly
    window.requestAnimationFrame(main)

    // Console.log this to see render time between animations in seconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    // If secondsSinceLastRender is less than the time between renders, we don't need to move our snake
    // Will render only twice per second
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
}

// Start initial main loop
window.requestAnimationFrame(main)