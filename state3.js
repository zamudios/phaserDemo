demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#80FF80';
		addChangeStateEventListerners();
	},
	update: function(){}	
};