/**
 * MountNode
 */

var React = require('react');

var MountNode = React.createClass({
    getDefaultProps() {
        return {
            id: null,
            isActive: true,
            elementName: 'span',
            elementProps: null
        }
    },


    /**
     * Lifecycle
     */

    componentWillMount() {
        if (!this.mountNode) {
            this.mountNode = document.createElement('span');
        }
        if (this.props.id) {
            this.mountNode.id = this.props.id;
        }
    },
    componentDidMount() {
        this.updateMountNode();
    },
    componentDidUpdate() {
        this.updateMountNode();  
    },
    componentWillUnmount() {
        this.removeMountNode();
    },
    render() {
        return null;
    },


    /**
     * Custom Logic
     */

    updateMountNode() {
        if (this.props.isActive) {
            this.renderMountNode();
        } else {
            this.removeMountNode();
        }
    },
    renderMountNode() {
        var {
            elementInstance,
            elementName,
            elementProps,
            children
        } = this.props;

        if (!elementInstance) {
            elementInstance = React.createElement(elementName, elementProps, children);
        }

        React.render(elementInstance, this.mountNode);
        document.body.appendChild(this.mountNode);
    },
    removeMountNode() {
        React.unmountComponentAtNode(this.mountNode);
        try {
            document.body.removeChild(this.mountNode);
        } catch (e) {}
    },


    /**
     * Public API
     */

    getMountNode() {
        return this.mountNode;
    }
});

module.exports = MountNode;
