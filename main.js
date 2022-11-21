noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 
 function draw(){
     background('#FFFF00');
     textSize(difference);
     fill("#00FF00");
     text("Hello",noseX,noseY);
     document.getElementById("font").innerHTML = "Font Size of Text Is :" +difference+ "px";
    }
 
 function modelLoaded(){
     console.log('PoseNet is Initialized!');
 }
 
 function gotPoses(results){
     if(results.length > 0)
     {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX = '+noseX);
        console.log('noseY = '+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log('leftWristX = '+leftWristX);
        console.log('rightWristX = '+rightWristX);
        console.log('difference = '+difference);
     }
 }