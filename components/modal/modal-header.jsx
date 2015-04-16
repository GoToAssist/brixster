/**
 * Modal Header
 */

var React = require('react');
var Header = require('brixo-ui/elements/header/header.jsx');
var Button = require('brixo-ui/elements/button/button.jsx');

var ModalHeader = React.createClass({
    getDefaultProps() {
        return {
            dismissButton: false
        };
    },
    getInitialState() {
        return {};
    },
    onDismiss() {
        this.props.__modal.cancel();
    },
    render() {

        var {
            dismissButton
        } = this.props;

        if (dismissButton) {
            dismissButton = <Button icon={dismissButton} onClick={this.onDismiss} />;
        }

        return (
            <div className="brx-modal__header">
                {dismissButton}
                <Header type="3">
                    {this.props.children}
                </Header>
            </div>
        );
    }
});

module.exports = ModalHeader;

