var SplitApp = React.createClass({
  render() {
    return (
      <div>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
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
    var style = {
      width: this.props.dim,
      height: this.props.dim,
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
        <div className='container box' style={style} onMouseEnter={this.split}>
        </div>
      )
    );
  },
});

React.render(<SplitApp/>,
  document.body
);
