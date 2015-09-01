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

//date 
var d;
var string;
var allLetters;
var binary;
var numbers = new Numbers();


var spacer = 20;//Math.round(Math.random()*30 +10);
var spacerY = 20;//Math.round(Math.random()*30 +10);
var letterSpacer = 5;
var radius = 20;

var posx = width/2 - (10*5*(spacer+letterSpacer))/2;
var posy = height/2 - 4*spacerY;

var s; // check previous second
var counter = 0;

// BUFFER OPTION
var allShapes = [];
function setup(){
	//Build all neededParticle for a time model
	// 12 numbers and sign with milliseconds
	for(var i=0;i<10;i++){
			//line
		for(var j=0;j<7;j++){
			//colnumber
			for(var k=0;k<5;k++){
				//store all shapes only once
				var shape = new ShapeInMotion(posx + k*spacer,posy + j*spacerY,radius,ctx);
				allShapes.push(shape);	
			
			}
		}	
		posx+=5*(spacer+letterSpacer);
	}
	
	draw();
}


function draw(){
	//console.log("I'm drawing");
	//clear canvas
	//cover method
	ctx.save();
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 0.04;
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,width,height);
	ctx.restore();
	//empty method
	//ctx.clearRect(0,0,width,height);
	ctx.fillStyle = "white";
	//circle.draw();
	//circle2.draw();
	//square.drawCenterSquare();
	ctx.globalCompositeOperation = 'lighter';
	d = new Date();
	ctx.font="30px Arial";
	string = ((d.getHours()<10)?0:'')+d.getHours()+':'+((d.getMinutes()<10)?0:'')+d.getMinutes()+':'+((d.getSeconds()<10)?0:'')+d.getSeconds()+':'+ Math.floor(d.getMilliseconds()/100);
	//ctx.fillText(string,0,24);
	var col = (Math.round(Math.random() * 255)) + ',' + (Math.round(Math.random() * 255)) + ',' + (Math.round(Math.random() * 255));
	var randomColor = 'rgba(' + col + ',0.009)';
	var randomColorFull = 'rgba(' + col + ',0.1)';
	allLetters = string.split("");
	counter = 0;
	var ii = -1;
	for(var i=0;i<allLetters.length;i++){
		
		//get binary letter composition
		binary = numbers.getBinary(allLetters[i]);
		
		//line number
		for(var j=0;j<binary.length;j++){
			//colnumber
			for(var k=0;k<binary[j].length;k++){
				//draw stuff
<<<<<<< HEAD:Drawing:Moving/src/Drawing.js
				//console.log("draw");
				if(s!=d.getSeconds()){
					allShapes[counter].reset();
					allShapes[counter].setColor(randomColor,randomColorFull);
				}
				allShapes[counter].updatePosition();
=======
>>>>>>> master:Drawing:Moving/Clock/src/Drawing.js
				if(binary[j][k] == 1){
					allShapes[counter].drawCircle();
					allShapes[counter].drawFixCircle();
				}
				counter++;
			}
		}
		
		
	}
	s = d.getSeconds();
	
	
	
	requestAnimationFrame( draw );	
}

//launch a drawing method
setup();