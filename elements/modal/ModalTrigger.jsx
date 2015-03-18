var React = require('react/addons'),
    DataUtils = require('utils/DataUtils');

require('./modal.scss');

var ModalTrigger = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
        triggerFunction: React.PropTypes.func.isRequired,
        className: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            className: ''
        };
    },
    render: function () {
        return (
            <div className={this.props.className} onClick={this.props.triggerFunction}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = ModalTrigger;
