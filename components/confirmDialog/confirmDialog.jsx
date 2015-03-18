var React = require('react/addons');
var Modal = require('../../elements/modal/modal');
var Button = require('brixo-ui/elements/button/button');
var Header = require('brixo-ui/elements/header/header');
var Panel = require('brixo-ui/elements/panel/panel');
var StackPanel = require('../stackpanel/stackpanel');
var css = require('./confirmDialog.scss');

var ConfirmDialog = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      title: 'Confirm Dialog'
    };
  },

  render () {
    var classes = {
      'confirm-dialog': true
    };
    var className = React.addons.classSet(classes);

    return (<Modal openedInitially={true}>
              <Modal.Popup>
                <StackPanel orientation="vertical" horizontallyCenterChildren={true}>
                  <Header>{this.props.title}</Header>

                  <Panel>
                    {this.props.children}
                  </Panel>

                  <StackPanel orientation="horizontal" fill={true} horizontallyCenterChildren={true}>
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </StackPanel>
                </StackPanel>
              </Modal.Popup>
            </Modal>);
  }
});

module.exports = ConfirmDialog;