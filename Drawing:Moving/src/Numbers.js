// JavaScript Document
var Numbers = function(){
	
}

Numbers.prototype = {
	
	getBinary:function(letter){
		switch(letter){
			
			case "0":
				return [[1,1,1,1,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case "1":
				return [[0,0,1,0,0],
						[0,1,1,0,0],
						[1,0,1,0,0],
						[0,0,1,0,0],
						[0,0,1,0,0],
						[0,0,1,0,0],
						[1,1,1,1,1]];
			break;
			case "2":
				return [[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[1,1,1,1,1],
						[1,0,0,0,0],
						[1,0,0,0,0],
						[1,1,1,1,1]];
			break;
			case "3":
				return [[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case "4":
				return [[1,0,0,0,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[0,0,0,0,1]];
			break;
			case "5":
				return [[1,1,1,1,1],
						[1,0,0,0,0],
						[1,0,0,0,0],
						[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case "6":
				return [[1,1,1,1,1],
						[1,0,0,0,0],
						[1,0,0,0,0],
						[1,1,1,1,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case "7":
				return [[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[0,0,0,1,0],
						[0,0,1,0,0],
						[0,0,1,0,0],
						[0,0,1,0,0]];
			break;
			case "8":
				return [[1,1,1,1,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case "9":
				return [[1,1,1,1,1],
						[1,0,0,0,1],
						[1,0,0,0,1],
						[1,1,1,1,1],
						[0,0,0,0,1],
						[0,0,0,0,1],
						[1,1,1,1,1]];
			break;
			case ":":
				return [[0,0,0,0,0],
						[0,0,0,0,0],
						[0,0,1,0,0],
						[0,0,0,0,0],
						[0,0,0,0,0],
						[0,0,1,0,0],
						[0,0,0,0,0]];
			break;
			
			
			}
	}

}