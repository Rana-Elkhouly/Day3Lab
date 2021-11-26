//Question No. 2 

function displayTime(){
    startTime();
    alert("Clock Started");
}
var onOff;
function startTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("time").innerText = [time];
    onOff = setTimeout(startTime, 1000);
}

function stopTime(){
    clearTimeout(onOff);
    alert("Clock stopped");
}

// Important Question: How to handle the onclick event using JavaScript (Not in the input tag).
// Extra Question: How to display time before the alert appears? 


// Question No. 4

function login(){
    location.replace("transfer.html");
}
