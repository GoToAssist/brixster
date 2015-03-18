var React = require('react/addons');
var css = require('./stackpanel.scss');

var StackPanel = React.createClass({
  propTypes: {
    orientation: React.PropTypes.oneOf(['horizontal','vertical']),
    fill: React.PropTypes.bool,
    childFill: React.PropTypes.bool,
    horizontallyCenterChildren: React.PropTypes.bool,
    style: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      fill: false,
      childFill: false,
      horizontallyCenterChildren: false,
      orientation: "vertical",
      style: []
    };
  },

  getChildStyle: function() {
    var elementCount = React.Children.count(this.props.children);
    var isVertical = this.props.orientation == "vertical";

    var dimensionStyle = {};
    var size = (100/elementCount) + "%";

    if (this.props.fill === true) {
      if (isVertical) {
        dimensionStyle.height = size;
      } else {
        dimensionStyle.width = size;
      }
    }

    return dimensionStyle;
  },

  render () {
    var classes = {
      'stackpanel': true,
      'child-fill': this.props.childFill,
      'horizontal-child-center': this.props.horizontallyCenterChildren
    };
    classes[this.props.orientation] = true;
    var className = React.addons.classSet(classes);
    var dimensionStyle = this.getChildStyle();

    var size_child = function(child) {
      return (<div style={ dimensionStyle }> { child } </div>);
    };

    return ( <div className={ className }> { React.Children.map(this.props.children, size_child) } </div>);
  }
});

module.exports = StackPanel;