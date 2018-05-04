function createShape(n) {
  var ballsArr = [];
  for (let i=0; i < n; i++) {
    let radius = 5+15*Math.random();
    let x = canvas.width/2;
    let y = canvas.height/2;
    let speedX = 1+2*Math.random();
    let speedY = 1+2*Math.random();

    let ball = new Ball(radius, x, y, speedX, speedY);
    
    ballsArr.push(ball);
  }
  return ballsArr;
}

function drawShape(balls){
  balls.forEach(function(ball) {
    // ctx.save();
    // ctx.translate(ball.x, ball.y)
    // ctx.fillStyle = ball.color;
    // ctx.beginPath();
    // ctx.arc(0, 0, ball.radius, 0, 2*Math.PI);
    // ctx.fill();
    // ctx.restore();

    ball.draw(ctx);
  })
}

function moveBall(balls) {
  balls.forEach(function(ball) {
    // ball.x += ball.speedX;
    // ball.y += ball.speedY;
    
    ball.move();

    testCollisions(ball); 
  })
}

function testCollisions(ball){
  if (ball.x + ball.radius > canvas.width) {
    ball.speedX = -ball.speedX;
    ball.x = canvas.width - ball.radius;
  } else if (ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX;
    ball.x = ball.radius;
  }

  if (ball.y + ball.radius > canvas.height) {
    ball.speedY = -ball.speedY;
    ball.y = canvas.height - ball.radius;
  } else if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
    ball.y = ball.radius;
  }
}
