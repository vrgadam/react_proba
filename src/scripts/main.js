$(document).ready(function () {
	var CONFIG = require('../config/config.json');

    var balloons = require('./balloons.js');
    var texts = require('./texts.js');
    var app = $('#app-container')[0];
    var glassLayer = $('.glass-layer');
    var appHeader = $('.app-header');
    var header = $('.section.header');
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

    $(document).scroll(function() {
    	glassLayer.css({ opacity: $(document).scrollTop() / 310 });
    	    	if ( appHeader.css('background-color') === 'rgba(0, 0, 0, 0)' && $(document).scrollTop() > 310 ) {
    		appHeader.css({ 'background-color': 'rgb(0, 0, 0)' }).addClass('docked');
    	}
    	if ( appHeader.css('background-color') === 'rgb(0, 0, 0)' && $(document).scrollTop() < 310 ) {
    		appHeader.css({ 'background-color': 'rgba(0, 0, 0, 0)' }).removeClass('docked');
    	}

    })
    React.render( <balloons.BalloonList numOfBalloons={CONFIG.app.balloons.number}/> , app);



});
