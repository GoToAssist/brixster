var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Modal = require('../../components/modal/modal');
var Button = require('brixo-ui/elements/button/button');
var Header = require('brixo-ui/elements/header/header');
var Panel = require('brixo-ui/elements/panel/panel');
var StackPanel = require('../stackpanel/stackpanel');
var css = require('./confirmDialog.scss');
var MountNode = require('../../elements/mount-node');

function noop(modal, action) {}

var ConfirmDialog = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    onAccept: noop,
    onCancel: noop
  },

  getDefaultProps: function() {
    return {
      title: 'Confirm Dialog',
      subTitle: '',
      onAccept: React.PropTypes.func,
      onCancel: React.PropTypes.func
    };
  },

  show () {
    this.refs.modal.show();
  },

  render () {
    var classes = {
      'confirm-dialog': true
    };
    var className = React.addons.classSet(classes);

      var actions = [{
          action: 'confirm',
          label: 'Ok',
          role: 'primary'
      },{
          action: 'cancel',
          label: 'Cancel',
          role: 'secondary'
      }];

    var modal = (<Modal ref="modal" 
                        positionFixed={true}
                        width="50vw"
                        height="auto"
                        actions={actions}
                        actionsAlign="left"
                        onConfirm={this.props.onAccept}
                        onCancel={this.props.onCancel}
                        positionClass="brx-confirm-dialog">
                    <Modal.Header>
                        {this.props.title}
                        <Header.Sub>
                        {this.props.subTitle}
                        </Header.Sub>
                    </Modal.Header>

                    <Modal.Body>
                      <div className="brx-confirm-dialog__inner">
                        <Panel>
                          {this.props.children}
                        </Panel>
                      </div>
                    </Modal.Body>
                </Modal>);

    return (<MountNode>
                <ReactCSSTransitionGroup transitionName="brx-confirm-dialog--fade" children={modal} />
            </MountNode>);
  }
});

module.exports = ConfirmDialog;