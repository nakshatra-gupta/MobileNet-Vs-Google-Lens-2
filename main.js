function setup() {
  canvas = createCanvas(400, 300);

video = createCapture(VIDEO);
video.size(400,300);
video.hide();

canvas = createCanvas(400, 300);

video = createCapture(VIDEO);
video.size(400,300);
video.hide();
canvas.right;
}
function draw()
{
translate(width,0);
scale(-1,1);
image(video, 0,0,400,300);
}



