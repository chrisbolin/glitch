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
        <div className='demo'>
          {this.renderBoxes(12)}
          <div className='footer'>
            <a href='https://github.com/chrisbolin/glitch'>???</a>
          </div>
        </div>
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
    var color = Math.floor(Math.random() * 16777215).toString(16);
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
          onClick={this.split}
          onMouseEnter={this.split}/>
      )
    );
  },
});

React.render(<SplitApp/>,
  document.body
);
