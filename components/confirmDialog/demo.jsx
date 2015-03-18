var React = require('react');
var Header = require('brixo-ui/elements/header/header');
var StackPanel = require('../../components/stackpanel/stackpanel');
var ConfirmDialog = require('./confirmDialog');

require('../../shared/styles/demo-page.scss');

module.exports = React.createClass({
  render () {
    return (
      <ConfirmDialog title="Sample ConfirmDialog">
      	test
      </ConfirmDialog>
    );
  }
});