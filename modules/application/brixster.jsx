var renderUtils = require('brixo-framework/shared/utils/render');
require('../../shared/styles/demo-page.scss');

var React = require('react');
var Application = require('./application');

var BrixsterComponent = React.createClass({
  render () {
    return (
      <Application/>
    );
  }
});

renderUtils(BrixsterComponent);
module.exports = BrixsterComponent;