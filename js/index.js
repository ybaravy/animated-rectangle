
var canvas, ctx;

var ball = {
  radius: 10,
  x: 10,
  y: 10,
  color: "blue",
  speedX: 1,
  speedY: 1,
}

window.onload = function init() {
  canvas = document.querySelector('#myCanvas');
  ctx = canvas.getContext("2d");
  animateCanvas();
}

function animateCanvas() {

  ctx.clearRect(0,0,canvas.width, canvas.height)
  
  drawFigure(ball);
  
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  testCollisions(ball);

  requestAnimationFrame(animateCanvas);

}

function drawFigure(ball){
  ctx.save();
  ctx.translate(ball.x, ball.y)
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(0, 0, ball.radius, 0, 2*Math.PI);
  ctx.fill();
  ctx.restore();
}

function testCollisions(ball){
  if (ball.x + ball.radius >= canvas.width) {
    ball.speedX = -ball.speedX;
    ball.x = canvas.width - ball.radius;
  } else if (ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX;
    ball.x = ball.radius;
  }

  if (ball.y + ball.radius >= canvas.height) {
    ball.speedY = -ball.speedY;
    ball.y = canvas.height - ball.radius;
  } else if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
    ball.y = ball.radius;
  }
}