Canvas = document.getElementById("MyCanvas");
ctx= Canvas.getContext("2d");
color = "Black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
var Size = 60;
var width = 2;
Canvas.addEventListener("mousedown",MyMouseDown);
function MyMouseDown(e){
    color = document.getElementById("Colour").value;
    width = document.getElementById("Width").value;
    console.log(color);
    mouseX=e.clientX - Canvas.offsetLeft;

    mouseY=e.clientY - Canvas.offsetTop;
console.log("X= "+ mouseX+" ,Y= " +mouseY);
circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
for(var i = 0; i < 1; i++){
    ctx.arc(mouseX, mouseY, Size, 0,2*Math.PI);
ctx.stroke();
i - 1;
}
}
function ClearArea(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}

