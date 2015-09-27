(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"app": {
		"balloons": {
			"number": 16
		}
	}
}

},{}],2:[function(require,module,exports){
var Balloon = React.createClass({displayName: "Balloon",
        propTypes: {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.number
        },
        getDefaultProps: function() {
            var id = Math.floor((Math.random() * 1000) + 1);
            
            return {
                id: id,
                name: "Awesome Hot-air Balloon",
                price: 15000
            }
        },
        render: function () {
            
            var imgUrl = "img/" + (this.props.id % 9) + ".jpg";
            
            return ( 
                React.createElement("div", {className: "balloon-container"}, 
                    React.createElement("img", {className: "balloon-img", src: imgUrl, title: this.props.id}), 
                    React.createElement("h1", {className: "balloon-name"}, this.props.name), 
                    React.createElement("h2", {className: "balloon-price"}, "$", this.props.price), 
                    React.createElement("span", {className: "buy-button btn", "data-product-id": this.props.id}, "Buy")
                )
            );
        }
    });
    
    var BalloonListItem = React.createClass({displayName: "BalloonListItem",
        render: function () {
            return (
                React.createElement("li", null, " ", React.createElement(Balloon, {id: this.props.id, name: this.props.name, price: this.props.price}), " ")
            );
        } 
    });
    
    var BalloonList = React.createClass({displayName: "BalloonList",
        getDefaultProps: function() {
            return {
                numOfBalloons: 20
            }
        },
        propTypes: {
            numOfBalloons: React.PropTypes.number
        },
        render: function() {
            var balloons = [];
            var nextId = Math.floor((Math.random() * 1000) + 1);
            for (var i = 0; i < this.props.numOfBalloons; i++) {
                balloons.push(React.createElement(BalloonListItem, {id: nextId}));
                nextId = Math.floor((Math.random() * 1000) + 1);
            }
            return (
                React.createElement("div", {className: "list-container"}, 
                    React.createElement("ul", null, balloons)
                ) 
            );
        }
    });
    
module.exports.BalloonList = BalloonList;

},{}],3:[function(require,module,exports){
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
		React.render( React.createElement(balloons.BalloonList, {numOfBalloons: CONFIG.app.balloons.number}) , app);    	
    });
    $(menu.texts).click(function() {
		React.render( React.createElement(texts.Texts, null) , app);    	
    });

    React.render( React.createElement(balloons.BalloonList, {numOfBalloons: CONFIG.app.balloons.number}) , app);



});

},{"../config/config.json":1,"./balloons.js":2,"./texts.js":4}],4:[function(require,module,exports){
var Texts = React.createClass({displayName: "Texts",
    render: function() {
     
        return ( React.createElement("div", {className: "text-container"}, 
        		React.createElement("h1", {className: "text-title"}, "Are hot-air balloons really that good?"), 
	        	React.createElement("p", null, "The hot air balloon is the oldest successful human-carrying flight technology. The first untethered manned hot air balloon flight was performed by Jean-François Pilâtre de Rozier and François Laurent d Arlandes on November 21, 1783, in Paris, France, in a balloon created by the Montgolfier brothers. Hot air balloons that can be propelled through the air rather than simply drifting the wind are known as thermal airships."), 
	        	React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu bibendum nibh. Nullam ut ex elit. Integer condimentum, purus eu semper rhoncus, tortor turpis auctor lorem, sollicitudin imperdiet magna felis eget mi. Praesent est turpis, dapibus et justo eget, faucibus hendrerit magna. Donec sed lectus magna. Donec sit amet est vitae ligula scelerisque pellentesque. Phasellus nulla odio, tempus ut pulvinar a, ultricies nec tellus. Quisque facilisis mauris malesuada ante tempus, a efficitur orci pretium.")
          ) 
        );
    }
});
module.exports.Texts = Texts;

},{}]},{},[3]);
