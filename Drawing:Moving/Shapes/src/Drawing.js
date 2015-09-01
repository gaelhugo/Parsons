var canvas = document.getElementById('canvas');
var width;
var height;
canvas.width = width =  window.innerWidth;
canvas.height = height = window.innerHeight;
var ctx = canvas.getContext('2d');

//create a circle
var circle = new Circle(200,200,10,ctx);
var circle2 = new Circle(400,400,10,ctx);
var square = new Shape(300,300,100,ctx);

function draw(){
	//console.log("I'm drawing");
	//clear canvas
	//cover method
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,width,height);
	//empty method
	//ctx.clearRect(0,0,width,height);
	ctx.fillStyle = "white";
	circle.draw();
	circle2.draw();
	square.drawCenterSquare();
	
	
	
	requestAnimationFrame( draw );	
}

//launch a drawing method
draw();