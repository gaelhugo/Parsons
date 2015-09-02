// JavaScript Document
var canvas = document.getElementById('canvas');
var width;
var height;
canvas.width = width =  window.innerWidth;
canvas.height = height = window.innerHeight;
var ctx = canvas.getContext('2d'); // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

var squareWidth = 20;
var squareHeight = 20;
var minWidth = squareWidth/20; 
var maxWidth = squareWidth-minWidth;
var counter=0;
//Small tricks to make sur that our height will not be divisble by 2 (otherwise we don't see a grid, but lines) 
var heightAdaptation = (Math.ceil(height/squareHeight)%2==1)?height/squareHeight:(height+20)/squareHeight;
ctx.strokeStyle = 'black';
for(var i = 0;i<width/squareWidth;i++){
	for(var j = 0;j<heightAdaptation;j++){
		/*
		if(counter%2==0){
			ctx.fillStyle = 'rgba(0,0,0,1)';
		}else{
			ctx.fillStyle = 'rgba(255,255,255,1)';	
		}
		*/
		
		ctx.beginPath();
		
		ctx.rect(i*squareWidth,j*squareHeight,squareWidth,squareHeight);
		//ctx.ellipse(i*squareWidth,j*squareHeight,squareWidth/2,squareHeight/2,0,0,2*Math.PI);
		
		//ctx.fill();
		ctx.stroke();
		counter++;
		//ctx.fillStyle = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
	}
	//ctx.fillStyle = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';//'rgb(255,0,0)';
	

}
