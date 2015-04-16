/**
 * FillLayout
 */

var React = require('react');

var ClassMap = require('brixo-framework/shared/utils/class-map');

var FillLayout = React.createClass({
    getDefaultProps() {
        return {
            mask: false,
            scrollable: true
        };
    },
    render() {

        var {
            scrollable,
            mask,
            children
        } = this.props;

        var classes = new ClassMap('brx-fill-layout');
        classes.set('brx-mask', mask);
        classes.set('brx-scrollable', scrollable);
        
        return (
            <div className={classes}>
                {children}
            </div>
        );
    }
});

module.exports = FillLayout;
