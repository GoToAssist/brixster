var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./addElementDialog.scss');

var List = require('brixo-ui/elements/list/list');
var Icon = require('brixo-ui/elements/icon/icon');
var ConfirmDialog = require('../../components/confirmDialog/confirmDialog');

var ElementActions = require('../../modules/application/actions/elementActions');

var AddElementDialog = React.createClass({
    propTypes: {
            elements: React.PropTypes.array
    },

    getDefaultProps () {
        return {
            elements: []
        };
    },

    removeElement (id) {
        ElementActions.removeElement(id);
    },

    render () {
        var classes = new ClassMap('addelementdialog');

        return (
            <div className={classes}>
                <ConfirmDialog title="Add Element">
                    test test test
                </ConfirmDialog>
            </div>
        );
    }
});

module.exports = AddElementDialog;

