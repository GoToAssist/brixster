/**
 * Modal Body
 */

var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');

var ModalBody = React.createClass({
    getDefaultProps() {
        return {
            htmlContent: null,
            scrollable: true
        };
    },
    getInitialState() {
        return {};
    },
    render() {

        var {
            htmlContent, 
            scrollable,
            children 
        } = this.props;

        var bodyClass = new ClassMap('modal__body');
        bodyClass.setPrefix('brx-');
        bodyClass.set('scrollable', scrollable);

        var innerClassName = 'brx-modal__body-inner';

        if (htmlContent) {
            children = <div className={innerClassName} dangerouslySetInnerHTML={{ __html:htmlContent }} />;
        } else {
            children = <div className={innerClassName} children={children} />
        }

        return <div className={bodyClass} children={children} />;
    }
});

module.exports = ModalBody;

