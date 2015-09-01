// JavaScript Document
var Circle = function(x,y,radius,ctx){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.ctx = ctx;
}


Circle.prototype = {
	
	draw:function(){
	  this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
	}
	
}