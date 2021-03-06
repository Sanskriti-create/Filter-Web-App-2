function preload()
{
    
}


function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}


function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose X : " + results[0].pose.nose.x);
        console.log("Nose Y : " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 450, 400);
}

function back()
{
    window.location = "index.html";
}

function take_snap()
{
    save("Filter.jpg")
}