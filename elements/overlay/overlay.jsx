/**
 * Overlay
 */

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var noop = function() {};

var Overlay = React.createClass({
    getDefaultProps() {
        return {
            isVisible: true,
            beforeHide: noop,
            afterHide: noop
        };
    },
    getInitialState() {
        return {
            isVisible: this.props.isVisible
        };
    },
    componentWillReceiveProps(props) {
        this.setState({
            isVisible: props.isVisible
        });
    },
    hide() {
        var self = this;
        self.props.beforeHide.call(self, self);
        this.setState({
            isVisible: false
        }, function() {
            setTimeout(function() {
                self.props.afterHide.call(self, self);
            }, 500);
        });
    },
    render() {
        var overlay;
        var { children } = this.props;

        if (this.state.isVisible) {
            overlay = (
                <div className="brx-overlay">
                    <div key="overlay-curtain" className="brx-overlay__curtain" onClick={this.hide}></div>
                    {children}
                </div>
            );
        }

        return <ReactCSSTransitionGroup transitionName="brx-overlay--fade" children={overlay} />;
    }
});

module.exports = Overlay;

