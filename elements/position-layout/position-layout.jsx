/**
 * PositionLayout
 */

var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');

var PositionLayout = React.createClass({
    propTypes: {
        position: React.PropTypes.oneOf([
            'centered',
            'topRight',
            'topLeft',
            'bottomRight',
            'bottomRight',
            'bottom'
        ])
    },
    getDefaultProps() {
        return {
            position: 'centered',
            fixed: false
        };
    },
    render() {
        var {
            position,
            fixed,
            className,
            children
        } = this.props;

        var classes = new ClassMap('position-layout');
        classes.setPrefix('brx-');
        classes.set('fixed', fixed);
        classes.add(position);
        classes.add(className);

        return <div className={classes}>{children}</div>;
    }
});

module.exports = PositionLayout;
