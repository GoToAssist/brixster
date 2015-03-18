var React = require('react');
var Header = require('brixo-ui/elements/header/header');
var StackPanel = require('../../components/stackpanel/stackpanel');
var AddElementDialog = require('./addElementDialog');

require('../../shared/styles/demo-page.scss');

module.exports = React.createClass({
  render () {
    return (
      <AddElementDialog title="Sample AddElementDialog">
      </AddElementDialog>
    );
  }
});