filterx = 0;
filtery = 0;

function prelode(){}

function setup(){
    canvas = creatCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lips, filterx, filtery, 30, 30);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function ts(){
    save("my_snap.png");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        filterx = results[0].pose.nose.x;
        filtery = results[0].pose.nose.y;

        filtery = filtery - 17;

        console.log("Value of lips X = " + filterx + ", Value of lips Y" + filterY);
    }
}