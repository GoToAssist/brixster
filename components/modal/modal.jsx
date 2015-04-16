/**
 * Modal
 */

var React = require('react/addons');
var Button = require('brixo-ui/elements/button/button.jsx');
var Overlay = require('../../elements/overlay');
var PositionLayout = require('../../elements/position-layout');
var BoxLayout = require('../../elements/box-layout');
var FillLayout = require('../../elements/fill-layout');

var css = require('./modal.scss');

var ClassMap = require('brixo-framework/shared/utils/class-map');

function noop(modal, action) {}

var Modal = React.createClass({
    getDefaultProps() {
        return {
            isVisible: true,
            overlay: true,
            position: 'centered',
            positionFixed: false,
            positionClass: null,
            width: '50vw',
            height: '50vh',
            scrollable: true,
            dismissButton: false,
            actions: null,
            actionsAlign: 'right',
            onCancel: noop,
            onConfirm: noop
        };
    },
    getInitialState() {
        return {
            isVisible: this.props.isVisible,
            status: 0
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            isVisible: nextProps.isVisible
        });
    },
    show() {
        if (this.state.status === 0) {
            return;
        }
        this.setState({
            isVisible: true,
            status: 0
        });
    },
    confirm() {
        if (this.state.status !== 0) {
            return;
        }
        this.setState({
            isVisible: false,
            status: 1
        }, function() {
            this.props.onConfirm.call(this, this, 'confirm');
        }.bind(this));
    },
    cancel() {
        if (this.state.status !== 0) {
            return;
        }
        this.setState({
            isVisible: false,
            status: -1
        }, function() {
            this.props.onCancel.call(this, this, 'cancel');
        }.bind(this));
    },
    render() {

        var header, body, footer;
        var {
            overlay,
            position,
            positionFixed,
            positionClass,
            width,
            height,
            scrollable,
            title,
            htmlContent,
            hint,
            dismissButton,
            actions,
            actionsAlign,
            children
        } = this.props;

        children = React.Children.map(children, function(child) {
            if (child.type === Modal.Header.type) {
                header = child;
            } else if (child.type === Modal.Footer.type) {
                footer = child;
            } else if (child.type === Modal.Body.type) {
                body = child;
            } else {
                return child;
            }
        });

        // create header component from properties
        if (!header && title) {
            header = React.createElement(Modal.Header, {}, title);
        }

        // create footer component from properties
        if (!footer && (hint || actions)) {
            footer = React.createElement(Modal.Footer, {
                hint: hint,
                actions: actions,
                actionsAlign: actionsAlign
            });
        }
        
        // wrap direct children as modal body component
        if (!body) {
            body = React.createElement(Modal.Body, {
                htmlContent: htmlContent,
                scrollable: scrollable
            }, children);
        }

        // give a reference to the modal widget to inner components
        if (header) {
            header = React.addons.cloneWithProps(header, {
                __modal: this,
                dismissButton: dismissButton
            });
        }
        if (footer) {
            footer = React.addons.cloneWithProps(footer, {
                __modal: this
            });
        }
        if (body) {
            body = React.addons.cloneWithProps(body, {
                __modal: this
            });
        }

        if (dismissButton) {
            dismissButton = (
                <PositionLayout position="topRight" className="dismiss-button">
                    <Button icon={dismissButton} onClick={this.cancel} />
                </PositionLayout>
            );
        }

        var modalContent = (
            <PositionLayout position={position} fixed={positionFixed} className={positionClass}>
                <BoxLayout width={width} height={height}>
                    <FillLayout scrollable={false}>
                        <div className="brx-modal">
                            {header}
                            {body}
                            {footer}
                            {dismissButton}
                        </div>
                    </FillLayout>
                </BoxLayout>
            </PositionLayout>
        );

        if (overlay) {
            return (
                <Overlay
                    ref="overlay" 
                    isVisible={this.state.isVisible} 
                    beforeHide={this.cancel}
                    children={modalContent}/>
            );
        } else {
            return modalContent;
        }
    }
});

Modal.Header = require('./modal-header.jsx');
Modal.Footer = require('./modal-footer.jsx');
Modal.Body = require('./modal-body.jsx');
Modal.Outline = require('./modal-outline.jsx');

module.exports = Modal;
