const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 448
canvas.height = 500
const $sprite = document.querySelector("#sprite")
const $bricks = document.querySelector("#bricks")

const ballRadius = 7
let x = canvas.width / 2
let y = canvas.height - 30

let dx = 2
let dy = -3

const paddleHeight = 10
const paddleWidth = 50

let paddleX = (canvas.width - paddleWidth) / 2
let paddleY = (canvas.height - paddleHeight) - 10

let rightPresed = false
let leftPresed = false

const PADDLE_SENSIBILITY = 10

const brickRowCount = 6
const brickColumnCount = 13
const brickWidth = 30
const brickHeight = 17
const brickPadding = 2
const brickOffsetTop = 2.5
const brickOffsetLeft = 18
const bricks = []

const BRICKS_STATUS = {
    ACTIVE: 1,
    DESTROYED: 0
}

for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    for (let r = 0; r < brickRowCount; r++) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
        const random = Math.floor(Math.random() * 8)
        bricks[c][r] = { x: brickX, y: brickY, status: BRICKS_STATUS.ACTIVE, color: random }
    }
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.closePath()
}

function drawPaddle() {
    ctx.drawImage(
        $sprite,
        29,
        174,
        paddleWidth,
        paddleHeight,
        paddleX,
        paddleY,
        paddleWidth,
        paddleHeight
    )
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r]
            if (currentBrick.status === BRICKS_STATUS.DESTROYED) continue
            const clipX = currentBrick.color * 32
            ctx.drawImage(
                $bricks,
                clipX,
                0,
                31,
                14,
                currentBrick.x,
                currentBrick.y,
                brickWidth,
                brickHeight
            )
        }
    }
}

function collsionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r]
            if (currentBrick.status === BRICKS_STATUS.DESTROYED) continue
            const isBallSameXAsBricks =
                x > currentBrick.x &&
                x < currentBrick.x + brickWidth

            const isBallSameYAsBricks =
                y > currentBrick.y &&
                y < currentBrick.y + brickHeight

            if (isBallSameXAsBricks && isBallSameYAsBricks) {
                dy = -dy
                currentBrick.status = BRICKS_STATUS.DESTROYED
            }
        }
    }
}

function initEvents() {
    document.addEventListener("keydown", keyDownHandler)
    document.addEventListener("keyup", keyUpHandler)
    function keyDownHandler(event) {
        const { key } = event
        if (key === 'Rigth' || key === "ArrowRight") {
            rightPresed = true
        }
        if (key === 'Left' || key === "ArrowLeft") {
            leftPresed = true
        }
    }
    function keyUpHandler(event) {
        const { key } = event
        if (key === 'Rigth' || key === "ArrowRight") {
            rightPresed = false
        }
        if (key === 'Left' || key === "ArrowLeft") {
            leftPresed = false
        }
    }
}

function ballMovement() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }
    if (y + dy < ballRadius) {
        dy = -dy
    }
    const isBallSameXAsPaddle = x > paddleX && x < paddleX + paddleWidth
    const isBallTouching = y + dy > paddleY
    if (isBallSameXAsPaddle && isBallTouching) {
        dy = -dy
    } else if (y + dy > canvas.height - ballRadius || y + dy > paddleY + paddleHeight) {
        console.log("Game Over");
        document.location.reload()
    }
    x += dx
    y += dy
}

function padddleMovement() {
    if (rightPresed && paddleX < canvas.width - paddleWidth) {
        paddleX += PADDLE_SENSIBILITY
    } else if (leftPresed && paddleX > 0) {
        paddleX -= PADDLE_SENSIBILITY
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function draw() {
    cleanCanvas()
    drawBall()
    drawPaddle()
    drawBricks()
    collsionDetection()
    ballMovement()
    padddleMovement()
    window.requestAnimationFrame(draw)
}

draw()
initEvents()