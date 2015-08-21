'use strict';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var SplitApp = React.createClass({
  displayName: 'SplitApp',

  renderBoxes: function renderBoxes(num) {
    var boxes = [];
    for (var i = 0; i < num; i++) {
      boxes.push(React.createElement(Box, { key: i }));
    }
    return boxes;
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement(
        'div',
        { className: 'demo' },
        this.renderBoxes(12),
        React.createElement(
          'div',
          { className: 'footer' },
          React.createElement(
            'a',
            { href: 'https://github.com/chrisbolin/glitch' },
            '???'
          )
        )
      )
    );
  }
});

var Box = React.createClass({
  displayName: 'Box',

  propTypes: {
    split: React.PropTypes.bool,
    dim: React.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      split: false,
      dim: 128
    };
  },
  getInitialState: function getInitialState() {
    return {
      split: false
    };
  },
  split: function split(e) {
    e.preventDefault();
    this.setState({ split: true });
  },
  unsplit: function unsplit(e) {
    e.preventDefault();
    this.setState({ split: false });
  },
  render: function render() {
    // http://www.paulirish.com/2009/random-hex-color-code-snippets/
    var color = Math.floor(Math.random() * 16777215).toString(16);
    var style = {
      width: this.props.dim,
      height: this.props.dim,
      backgroundColor: color
    };
    return this.state.split ? React.createElement(
      'div',
      { className: 'container', onContextMenu: this.unsplit },
      React.createElement(Box, { dim: this.props.dim / 2 }),
      React.createElement(Box, { dim: this.props.dim / 2 }),
      React.createElement('br', null),
      React.createElement(Box, { dim: this.props.dim / 2 }),
      React.createElement(Box, { dim: this.props.dim / 2 })
    ) : React.createElement('div', { className: 'container',
      style: style,
      onTouchTap: this.split,
      onMouseEnter: this.split });
  }
});

React.render(React.createElement(SplitApp, null), document.body);