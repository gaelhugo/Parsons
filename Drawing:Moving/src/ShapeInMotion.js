// JavaScript Document
var ShapeInMotion = function(x,y,radius,ctx){
	this.originX = x;
	this.x = x;
	this.originY = y;
	this.y = y;
	this.radius = radius;
	this.originalRadius = radius;
	this.ctx = ctx;
	this.color = 'white';
	this.speedX;
	this.speedY;
	this.colorFull = 'white';
	this.radiusAugmentation = Math.random()*2;
	this.fixRadius = 0;
}


ShapeInMotion.prototype = {
	
	drawCircle:function(){
	  this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.color
      this.ctx.fill();
	  this.ctx.closePath();
	},
	
	drawFixCircle:function(){
	  this.ctx.beginPath();
      this.ctx.arc(this.originX, this.originY, this.fixRadius , 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.colorFull;
      this.ctx.fill();
	  this.ctx.closePath();
	},
	
	drawSquare:function(){
	  this.ctx.beginPath();
      this.ctx.rect(this.x,this.y,this.radius,this.radius);
      this.ctx.fillStyle = this.color
      this.ctx.fill();
	},
	
	drawCenterSquare:function(){
	  this.ctx.beginPath();
      this.ctx.rect(this.x-(this.radius/2),this.y-(this.radius/2),this.radius,this.radius);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
	},
	
	updatePosition:function(){
		this.x+=this.speedX;
		this.y+=this.speedY;
		this.radius+=this.radiusAugmentation ;
		this.fixRadius  = (this.fixRadius <this.originalRadius)?this.fixRadius+=0.2:this.originalRadius;
	},
	
	reset:function(){
		this.x = this.originX;
		this.y = this.originY;
		this.speedX = Math.round( 1 - Math.random()*2 )* (Math.random()*5);
		this.speedY = Math.round( 1 - Math.random()*2 )*(Math.random()*10);
		this.radius = this.originalRadius ;
		this.fixRadius = 0;
	},
	
	setColor:function(color,colorFull){
		this.color =color;
		this.colorFull = colorFull;
	}
	
}