/**
 * Modal Footer
 */

var React = require('react');
var Button = require('brixo-ui/elements/button/button.jsx');

var ClassMap = require('brixo-framework/shared/utils/class-map');

var ModalFooter = React.createClass({
    getDefaultProps() {
        return {
            hint: null,
            actions: [],
            actionsAlign: 'right'
        };
    },
    render() {
        var {
            __modal,
            hint,
            actions,
            actionsAlign,
            confirmHandler,
            cancelHandler,
            children
        } = this.props;

        if (hint || children) {
            hint = <div className="brx-modal__hint">{hint || children}</div>;
        }

        // map the actions array into Button components
        if (actions) {
            actions = actions.map(function(actionOptions, i) {

                // convert named actions into config objects
                if ('string' === typeof actionOptions) {
                    var actionName = actionOptions;
                    actionOptions = {
                        action: actionOptions,
                        label: actionOptions
                    };
                    switch (actionName) {
                        case 'confirm':
                            actionOptions['role'] = 'primary';
                            break;
                        case 'cancel':
                            actionOptions['role'] = 'neutral';
                            break;
                    }
                }
                
                var {
                    label,
                    action,
                    icon,
                    role
                } = actionOptions;

                function actionHandler() {
                    if ('function' === typeof action) {
                        action.apply(__modal, arguments);
                    } else {
                        switch (action) {
                            case 'confirm':
                                __modal && __modal.confirm.apply(__modal, arguments);
                                break;
                            case 'cancel':
                                __modal && __modal.cancel.apply(__modal, arguments);
                                break;
                        }
                    }
                }

                return (
                    <Button
                        key={'action-' + i}
                        onClick={actionHandler}
                        children={label}
                        icon={icon}
                        role={role}
                        />
                );
            });
        }

        var classes = new ClassMap('modal__footer');
        classes.setPrefix('brx-');
        classes.add(actionsAlign);

        return (
            <div className={classes}>
                <div className="brx-modal__footer-inner">
                    {hint}
                    {actions}
                </div>
            </div>
        );
    }
});

module.exports = ModalFooter;

