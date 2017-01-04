var demo = {};

var centerX = 1500 / 2, centerY = 1000 / 2, mario; 

demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){
		game.load.image('mario', 'assets/sprites/mario.png');
	},
	create: function(){
		game.stage.backgroundColor = '#80FF80';		
		addChangeStateEventListerners();
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        mario = game.add.sprite(centerX, centerY, 'mario');
        mario.anchor.setTo(0.5, 0.5);
    },
	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            mario.x += 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            mario.x -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            mario.y -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            mario.y += 4;
        }
    }	
};

function changeState (i, stateNum){
	game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListerners(){
		addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
		addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
		addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
		addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
		addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
		addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
		addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
		addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
		addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
		addKeyCallback(Phaser.Keyboard.NINE , changeState, 9);
}