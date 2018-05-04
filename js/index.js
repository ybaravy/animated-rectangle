
var canvas, ctx;
var rectangleX = 0;
var direction = 1;
var ctxWidth = 100;

window.onload = function init() {
  canvas = document.querySelector('#myCanvas');
  ctx = canvas.getContext("2d");

  // setTimeout(animateCanvas, 100);

  requestAnimationFrame(animateCanvas);

}

function animateCanvas() {
  ctx.save();
  ctx.clearRect(0,0,canvas.width, canvas.height)
  drawRectangle(rectangleX);
  rectangleX += direction;

  if ((rectangleX >= canvas.width - ctxWidth) || (rectangleX <= 0)) {
    direction = -direction;
  };
  // setTimeout(animateCanvas, 100);
  requestAnimationFrame(animateCanvas);
  ctx.restore();
}

function drawRectangle(rectangleX){
  ctx.save();
  ctx.fillStyle="red";
  ctx.fillRect(rectangleX,10,ctxWidth,50);
  ctx.restore();
}
