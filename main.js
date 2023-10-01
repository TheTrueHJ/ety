w = 0;
h = 0;
x = 0;
y = 0;
to_number = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number = Number(content);
 if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    document.getElementById("status").innerHTML = "No number recognized"
  }
 else{

 }
}

function preload(){
  apple = loadImage("apple.png");
}

function setup() {
 w = window.innerWidth;
 h = window.innerHeight;
 canvas = createCanvas(w,h-150);
 canvas.position(150,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1, i <= to_number; i++){
      x = Math.floor(Math.random * 700);
      y = Math.floor(Math.random * 400);
      image(apple,x,y,50,50);
    }
    speak_data = to_number + "apples drawn";
    speak();
  }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
