// Name of the game. 
demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#FF5500';		
		addChangeStateEventListerners();
	},
	update: function(){}	
};