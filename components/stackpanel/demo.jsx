var React = require('react');
var Header = require('brixo-ui/elements/header/header');
var StackPanel = require('./stackpanel');

require('../../shared/styles/demo-page.scss');

module.exports = React.createClass({
  render () {
    var blockStyle1 = { backgroundColor: "blue", color: "white" };
    var blockStyle2 = { backgroundColor: "red", color: "white" };
    return (
      <StackPanel fill={true} orientation="horizontal" childFill={true}>
        <Header>test</Header>
        <div style={blockStyle1}>body</div>
        <div style={blockStyle2}>footer</div>
      </StackPanel>
    );
  }
});