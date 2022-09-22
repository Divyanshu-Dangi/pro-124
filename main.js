function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(550,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
    console.log("posenet is initialized");
}
function draw()
{
    background("#24efc0");
}
function gotposes(error,results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
  }
}