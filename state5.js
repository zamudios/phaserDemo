demo.state5 = function(){};
demo.state5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#80FF80';
		addChangeStateEventListerners();
	},
	update: function(){}	
};