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




var spacer = Math.random()*30 +10;
var spacerY = Math.random()*30 +10;
var letterSpacer = 5;

var posx;
var posy = height/2 - 4*spacerY;

function draw(){
	//console.log("I'm drawing");
	//clear canvas
	//cover method
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,width,height);
	//empty method
	//ctx.clearRect(0,0,width,height);
	ctx.fillStyle = "white";
	//circle.draw();
	//circle2.draw();
	//square.drawCenterSquare();
	
	d = new Date();
	//console.log(d.getMilliseconds());
	ctx.font="30px Arial";
	string = ((d.getHours()<10)?0:'')+d.getHours()+':'+((d.getMinutes()<10)?0:'')+d.getMinutes()+':'+((d.getSeconds()<10)?0:'')+d.getSeconds()+':'+((d.getMilliseconds()<100)?0:'')+d.getMilliseconds();
	ctx.fillText(string,0,24);
	
	allLetters = string.split("");
	posx = width/2 - (12*5*(spacer+letterSpacer))/2;
	for(var i=0;i<allLetters.length;i++){
		//console.log(allLetters[i]);
		//get binary letter composition
		binary = numbers.getBinary(allLetters[i]);
		
		//line number
		for(var j=0;j<binary.length;j++){
			//colnumber
			for(var k=0;k<binary[j].length;k++){
				//draw stuff
				//console.log("draw");
				if(binary[j][k] == 1){
					var shape = new Shape(posx + k*spacer,posy + j*spacerY,5,ctx);
					shape.drawCircle();
				}
			}
		}
		posx+=5*(spacer+letterSpacer);
	}
	
	
	
	
	requestAnimationFrame( draw );	
}

//launch a drawing method
draw();