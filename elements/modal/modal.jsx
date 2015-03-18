var React = require('react/addons'),
    DataUtils = require('utils/DataUtils'),
    ModalTrigger = require('./modalTrigger.jsx'),
    ModalPopup = require('./modalPopup.jsx');

require('./modal.scss');


var MODAL_CLASSNAME = 'modal',
    MODAL_CONTAINER_CLASSNAME = 'modal-container';

var ReactLayeredComponentMixin = {
    componentWillUnmount: function() {
        React.unmountComponentAtNode(this._modalContainer);
        document.body.removeChild(this._modalContainer);
    },
    componentDidUpdate: function() {
        React.render(this.renderLayer(), this._modalContainer);
    },
    componentDidMount: function() {
        // Appending to the body is easier than managing the z-index of everything on the page.
        // It's also better for accessibility and makes stacking a snap (since components will stack
        // in mount order).
        this._modalContainer = document.createElement('div');
        this._modalContainer.className = MODAL_CONTAINER_CLASSNAME;
        document.body.appendChild(this._modalContainer);
        React.render(this.renderLayer(), this._modalContainer);
    }
};


var Modal = React.createClass({
    mixins: [ReactLayeredComponentMixin],
    propTypes: {
        className: React.PropTypes.string,
        children: function (props, propName) {
            if (React.Children.count(props[propName]) == 0) {
                return new Error('The modal must have either a modalPopup or one modalPopup and one modalTrigger as its only children!');
            }

            var result = null;

            var ModalPopupNames = [ModalPopup.displayName, ModalTrigger.displayName, 'Modal.Popup', 'Modal.Trigger'];
            var ModalTriggerNames = [ModalPopup.displayName, 'Modal.Popup'];

            var modalPopups = 0;
            var modalTriggers = 0;

            React.Children.forEach(props[propName], function(child) {
                if (typeof(child) == 'string') {
                    if (child.trim().length > 0) {
                        result = new Error('The modal only accepts ModalPopup or ModalTrigger as child components! Please try to avoid Text between components.');
                    }
                } else if (ModalPopupNames.indexOf(child.type.displayName) > -1) {
                    modalPopups++;
                } else if (ModalTriggerNames.indexOf(child.type.displayName) <= -1) {
                    modalTriggers++;
                } else {
                    result = new Error('The modal only accepts ModalPopup or ModalTrigger as child components!');
                }

                if (result !== null) {
                    return false;
                }
            });

            if (result === null) {
                if (modalPopups <= 0) {
                    result = new Error('The modal must have a ModalPopup child element');
                } else if (modalPopups > 1) {
                    result = new Error('The modal must have only one ModalPopup child element');
                } else if (modalTriggers > 1) {
                    result = new Error('The modal must have only one ModalTrigger child element');
                }
            }

            return result;
        },
        openedInitially: React.PropTypes.bool
    },
    getChild: function (displayName, defaultChild) {
        var child = null;

        React.Children.forEach(this.props.children, function (currentChild) {
            if (typeof(currentChild) !== 'string' && currentChild.type.displayName === displayName) {
                child = currentChild;
                return;
            }
        });

        return child || defaultChild;
    },
    getInitialState: function () {
        return {
            isOpen: this.props.openedInitially
        };
    },
    close: function () {
        this.setState({isOpen: false});
    },
    open: function () {
        this.setState({isOpen: true});
    },
    renderLayer: function () {
        if (!this.state.isOpen) {
            return <span />;
        }

        var modalPopupChild = this.getChild(ModalPopup.displayName),
            left = 'auto',
            top = 'auto';

        if (modalPopupChild.props.anchorAtTrigger === 'true' && this.refs['modal-trigger-wrapper']) {
            var boundingRect = this.refs['modal-trigger-wrapper'].getDOMNode().getBoundingClientRect();
            var modalWidth = parseInt(modalPopupChild.props.width, 10);
            left = (boundingRect.left - modalWidth - 10) + document.body.scrollLeft + 'px' ;
            top = boundingRect.top + document.body.scrollTop + 'px';
        }


        modalPopupChild.props.onRequestClose = this.close;
        modalPopupChild.props.left = left;
        modalPopupChild.props.top = top;

        return modalPopupChild;
    },
    render: function () {
        var classes = {},
            modalTrigger = this.getChild(ModalTrigger.displayName);

        classes[this.props.className]   = !!this.props.className;
        classes[MODAL_CLASSNAME]        = true;

        if (modalTrigger) {
            modalTrigger.props.triggerFunction = this.open;

            return (
                <span onClick={this.open} className={React.addons.classSet(classes)} ref='modal-trigger-wrapper'>
                  {modalTrigger}
                </span>
            );
        } else {
            return <span/>;
        }
    }
});

Modal.Trigger = ModalTrigger;
Modal.Popup = ModalPopup;

module.exports = Modal;