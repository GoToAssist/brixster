/**
 * BoxLayout
 */

var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');

var BoxLayout = React.createClass({
    getDefaultProps() {
        return {
            width: null,
            height: null
        };
    },
    getInitialState() {
        return {};
    },
    render() {
        var panelStyle = {};
        var {
            width,
            height,
            className,
            style,
            children
        } = this.props;

        if (style) {
            Object.keys(style).forEach(function(key) {
                panelStyle[key] = style[key];
            });
        }

        if (width) {
            panelStyle['width'] = width;
        }
        if (height) {
            panelStyle['height'] = height;
        }

        var classes = new ClassMap('box-layout');
        classes.setPrefix('brx-');
        classes.add(className);

        return <div className={classes} style={panelStyle}>{children}</div>;
    }
});

module.exports = BoxLayout;
