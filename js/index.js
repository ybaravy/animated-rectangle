
var canvas, ctx, mousePos;

var balls = [];

window.onload = function init() {
  canvas = document.querySelector('#myCanvas');
  ctx = canvas.getContext("2d");
  canvas.addEventListener("mousemove", (event) => {
    var rect = canvas.getBoundingClientRect();
    mousePos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  })
  balls = createShape(2);

  animateCanvas();
}

function animateCanvas() {

  ctx.clearRect(0,0,canvas.width, canvas.height)
  
  drawShape(balls);
  moveBall(balls);  

  requestAnimationFrame(animateCanvas);

}

function createShape(n) {
  var ballsArr = [];
  for (var i=0; i < n; i++) {
    ball = {
      radius: 5+15*Math.random(),
      x: canvas.width/2,
      y: canvas.height/2,
      color: 'grey',
      speedX: 1+2*Math.random(),
      speedY: 1+2*Math.random()
    };
    ballsArr.push(ball);
  }
  return ballsArr;
}

function drawShape(balls){
  balls.forEach(function(ball) {
    ctx.save();
    ctx.translate(ball.x, ball.y)
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(0, 0, ball.radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
  })
}

function moveBall(balls) {
  balls.forEach(function(ball) {
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    testCollisions(ball); 
  })
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
