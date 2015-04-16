/**
 * Modal Outline
 */

var React = require('react');

var ModalOutline = React.createClass({
    getDefaultProps() {
        return {};
    },
    getInitialState() {
        return {};
    },
    render() {
        return (
            <div className="brx-modal__outline">
                {this.props.children}
            </div>
        );
    }
});

module.exports = ModalOutline;

