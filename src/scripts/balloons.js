var Balloon = React.createClass({
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
                <div className="balloon-container">
                    <img className="balloon-img" src={imgUrl} title={this.props.id}></img>
                    <h1 className="balloon-name">{this.props.name}</h1>
                    <h2 className="balloon-price">${this.props.price}</h2> 
                    <span className="buy-button btn" data-product-id={this.props.id}>Buy</span>
                </div>
            );
        }
    });
    
    var BalloonListItem = React.createClass({
        render: function () {
            return (
                <li> <Balloon id={this.props.id} name={this.props.name} price={this.props.price}/> </li>
            );
        } 
    });
    
    var BalloonList = React.createClass({
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
                <div className="list-container">
                    <ul>{balloons}</ul>
                </div> 
            );
        }
    });
    
module.exports.BalloonList = BalloonList;
