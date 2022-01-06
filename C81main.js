Canvas = document.getElementById("MyCanvas");
ctx= Canvas.getContext("2d");
color = "Black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;

Canvas.addEventListener("mousedown",MyMouseDown);
function MyMouseDown(e){
    color = document.getElementById("Colour").value;
    console.log(color);
    mouseX=e.clientX - Canvas.offsetLeft;

    mouseY=e.clientY - Canvas.offsetTop;
console.log("X= "+ mouseX+" ,Y= " +mouseY);
circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
for(var i = 0; i < 1; i++){
    ctx.arc(mouseX, mouseY, 60, 0,2*Math.PI);
ctx.stroke();
i - 1;
}
}
function ClearArea(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}

