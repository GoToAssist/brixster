var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./application.scss');
var Header = require('brixo-ui/elements/header/header');
var Panel = require('brixo-ui/elements/panel/panel');
var Button = require('brixo-ui/elements/button/button');

var ElementData = require('./elementData');
var ElementAPI = require('./utils/elementAPI')
var ElementStore = require('./stores/elementStore');
var ElementList = require('../../components/elementList/elementList');
var StackPanel = require('../../components/stackPanel/stackPanel');
var AddElementDialog = require('../../components/addElementDialog/addElementDialog');

var _ = require('lodash');

ElementData.init();
ElementAPI.getElementData();

function getElementsState() {
  return {
    elements: ElementStore.getElements(),
    elementCount: ElementStore.getElementCount()
  };
}

var Application = React.createClass({
    propTypes: {
    },

    getDefaultProps () {
        return {
        };
    },

    getInitialState () {
        return _.extend({
            addElementPopupVisible: false
        }, getElementsState());
    },

    componentDidMount () {
        ElementStore.addChangeListener(this._onChange);
    },

    componentWillUnmount () {
        ElementStore.removeChangeListener(this._onChange);
    },

    showAddElementPopup () {
        this.setState(_.extend(this.state, {
            addElementPopupVisible: true
        }));
    },

    closeAddElementDialog: function() {
        this.setState(_.extend(this.state, {
            addElementPopupVisible: false
        }));
    },

    render () {
        var classes = new ClassMap('application');

        var modal = ( <div/> );

        if (this.state.addElementPopupVisible) {
            modal = ( <AddElementDialog onClose={this.closeAddElementDialog}/> );
        }

        return (
            <div className={classes}>
                <Header type="1" icon="star">
                    BRIXSTER
                    <Header.Sub>Brixo + Nipster = Brixster</Header.Sub>
                </Header>

                <Panel position="right">
                    <Button size="small" onClick={this.showAddElementPopup}>Add</Button>
                    <Button size="small">Remove</Button>
                </Panel>

                <Panel>
                    <ElementList elements={this.state.elements} />
                </Panel>

                <StackPanel horizontallyCenterChildren={true}>
                    {modal}
                </StackPanel>
            </div>
        );
    },

    _onChange: function() {
        this.setState(_.extend({
            addElementPopupVisible: false
        }, getElementsState()));
    }
});

renderUtils(Application);
module.exports = Application;