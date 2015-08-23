var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var getRandomColor = function() {
  var getRandomHue = function(min, max) {
    min = min || 0;
    max = max || 255;
    var number = min + (Math.random() * (max - min));
    return String('00' + Math.floor(number).toString(16)).slice(-2);
  };
  return '#' + getRandomHue(0) + getRandomHue(100) + getRandomHue(0);
};

var SplitApp = React.createClass({
  renderBoxes(num) {
    var boxes = [];
    for (var i = 0; i < num; i++) {
      boxes.push(<Box key={i}/>);
    }
    return boxes;
  },
  render() {
    return (
      <div className='app'>
        <div className='stage'>
          {this.renderBoxes(12)}
          <Footer/>
        </div>
      </div>
    );
  },
});

var Footer = React.createClass({
  getInitialState() {
    return ({
      showAbout: false,
    });
  },
  toggle() {
    this.setState({
      showAbout: !this.state.showAbout,
    });
  },
  render() {
    return (
      <div className='footer'>
        {this.state.showAbout ? (
          <div>
            <p>glitch is interactive art.</p>
            <p>hover, tap, right-click.</p>
            <p>
              <a href='https://github.com/chrisbolin/glitch'>
                source code
              </a>
            </p>
            <p>&copy; 2015 chris bolin</p>
            <p><a onClick={this.toggle}>hide</a></p>
          </div>
        ) : (
          <a onClick={this.toggle}>???</a>
        )}
      </div>
    );
  },
});

var Box = React.createClass({
  propTypes: {
    split: React.PropTypes.bool,
    dim: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      split: false,
      dim: 128,
    };
  },
  getInitialState() {
    return {
      split: false,
    };
  },
  split(e) {
    e.preventDefault();
    this.setState({split: true});
  },
  unsplit(e) {
    e.preventDefault();
    this.setState({split: false});
  },
  render() {
    // http://www.paulirish.com/2009/random-hex-color-code-snippets/
    var color = getRandomColor();
    var style = {
      width: this.props.dim,
      height: this.props.dim,
      backgroundColor: color,
    };
    return (
      this.state.split ? (
        <div className='container' onContextMenu={this.unsplit}>
          <Box dim={this.props.dim / 2}/>
          <Box dim={this.props.dim / 2}/>
          <br/>
          <Box dim={this.props.dim / 2}/>
          <Box dim={this.props.dim / 2}/>
        </div>
      ) : (
        <div className='container'
          style={style}
          onTouchTap={this.split}
          onMouseEnter={this.split}/>
      )
    );
  },
});

React.render(<SplitApp/>,
  document.body
);
