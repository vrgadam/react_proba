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
                <div className="one-third column"> <Balloon id={this.props.id} name={this.props.name} price={this.props.price}/> </div>
            );
        } 
    });
    var BalloonRow = React.createClass({

        render: function () {
            var balloons = [
                React.createElement(BalloonListItem, {id: this.props.firstId}), 
                React.createElement(BalloonListItem, {id: this.props.secondId}), 
                React.createElement(BalloonListItem, {id: this.props.thirdId}) 
            ];

            return (
                <div className="row">{balloons}</div>
            );
        } 
    });
        
    var BalloonList = React.createClass({
        getDefaultProps: function() {
            return {
                numOfBalloons: 21
            }
        },
        propTypes: {
            numOfBalloons: React.PropTypes.number
        },
        render: function() {
            var balloonRows = [];
            for (var i = 0; i < this.props.numOfBalloons; i += 3) {
                balloonRows.push(React.createElement(BalloonRow, {firstId: i, secondId: i + 1, thirdId: i + 2}));
            }
            return (
                <div className="list-container">
                    <div>{balloonRows}</div>
                </div> 
            );
        }
    });
    
module.exports.BalloonList = BalloonList;
