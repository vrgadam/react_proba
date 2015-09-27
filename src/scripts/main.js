$(document).ready(function () {
	var CONFIG = require('../config/config.json');

    var balloons = require('./balloons.js');
    var texts = require('./texts.js');
    var app = $('#app-container')[0];
    var menu = {
    	balloons: $('.menu-item.balloons')[0],
    	texts: $('.menu-item.text')[0],
    };

    $(menu.balloons).click(function() {
		React.render( <balloons.BalloonList numOfBalloons={CONFIG.app.balloons.number}/> , app);    	
    });
    $(menu.texts).click(function() {
		React.render( <texts.Texts/> , app);    	
    });

    React.render( <balloons.BalloonList numOfBalloons={CONFIG.app.balloons.number}/> , app);



});
