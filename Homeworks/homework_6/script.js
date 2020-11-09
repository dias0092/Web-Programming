var in1 = document.getElementById("1st");
var in2 = document.getElementById("2nd");

var result = document.getElementById("result");

function multiply() {
    var answer = in1.value * in2.value;
    result.innerHTML = answer;
}

function divide() {
    var answer = in1.value / in2.value;
    result.innerHTML = answer;
}




var celc1 = document.getElementById("1stC");
var celc2 = document.getElementById("2ndC");

var far1 = document.getElementById("1stF");
var far2 = document.getElementById("2ndF");

var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");

function Far() {
    var fare = ((celsius.value * 9)/5)+32;
    
    celc1.innerHTML = celsius.value;
    far2.innerHTML = fare;
}

function Cel() {
    var celc = ((fahrenheit.value - 32)/9)*5;
    
    far1.innerHTML = fahrenheit.value;
    celc2.innerHTML = celc;
}





var radius = document.getElementById("radius");
var volume = document.getElementById("volume");

var pi = Math.PI;

function calculate() {
    volume.value = (4/3)*pi*radius.value*radius.value*radius.value;
}




var number = document.getElementById("number");
var reversed = document.getElementById("reversed");

function reverse() {
	number.value = number.value + "";
	reversed.innerHTML = number.value.split("").reverse().join("");
}


function drawRect() {
    
    if (document.getElementById("canvasRect").getContext) {
        var rect = document.getElementById("canvasRect").getContext('2d');
        rect.fillRect(20, 20, 100, 100);
        rect.clearRect(40, 40, 60, 60);
        rect.strokeRect(45, 45, 50, 50);
    }
}



function drawCircle() {
    var canvas = document.getElementById("canvasCircle");
    if (canvas.getContext) {
        var cir = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        cir.beginPath();
        cir.arc(X, Y, R, 0, 2 * Math.PI, false);
        cir.lineWidth = 5;
        cir.strokeStyle = ' #212F3D';
        cir.stroke();
    }
}



function draw() {
    var own = document.getElementById("canvas").getContext("2d");
    var counter = 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            
                own.fillStyle = "rgb(" + Math.floor(255 - 42.5 * i) + "," + Math.floor(255 - 42.5 * i) +
                "," + Math.floor(255 - 42.5 * j) + ")";
                own.beginPath();
            if (i === counter && j === counter) {
                
                    own.arc(25 + j * 50, 30 + i * 50, 20, 0, Math.PI * 2, true);
                    own.fill();
               
                    own.stroke();
            }
        }
        counter++;
    }
}
