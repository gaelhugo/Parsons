// JavaScript Document
var Shape = function(x,y,radius,ctx){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.ctx = ctx;
	this.color;
}


Shape.prototype = {
	
	drawCircle:function(){
	  this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
	},
	
	drawSquare:function(){
	  this.ctx.beginPath();
      this.ctx.rect(this.x,this.y,this.radius,this.radius);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
	},
	
	drawCenterSquare:function(){
	  this.ctx.beginPath();
      this.ctx.rect(this.x-(this.radius/2),this.y-(this.radius/2),this.radius,this.radius);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
	}
	
}