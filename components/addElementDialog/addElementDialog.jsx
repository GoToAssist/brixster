var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./addElementDialog.scss');

var List = require('brixo-ui/elements/list/list');
var Icon = require('brixo-ui/elements/icon/icon');
var Input = require('brixo-ui/elements/input/input');
var Label = require('brixo-ui/elements/label/label');
var ConfirmDialog = require('../../components/confirmDialog/confirmDialog');

var ElementActions = require('../../modules/application/actions/elementActions');

function noop(modal, action) {}

var AddElementDialog = React.createClass({
    propTypes: {
        onClose: React.PropTypes.func
    },

    getDefaultProps () {
        return {
            onClose: noop
        };
    },

    getInitialState () {
        return {
            errors: {},
            nameStatus: '',
            repoStatus: '',
        };
    },


    removeElement (id) {
        ElementActions.removeElement(id);
    },

    addElement () {
        var name = this.refs.nameInput.getValue();
        var respository = this.refs.repoInput.getValue();
        if (name) {
            if (respository) {
                this.setState(_.extend(this.state, {
                    nameStatus: 'valid',
                    repoStatus: 'valid',
                    errors: {}
                }));
                
                // TODO
                ElementActions.addElement("-", {});

                this.props.onClose();
            } else {
                this.setState(_.extend(this.state, {
                    nameStatus: 'valid',
                    repoStatus: 'invalid',
                    errors: {
                        'repo': 'Repository Path is required'
                    }
                }));

                this.refs.confirmDialog.show();
            }
        } else {
            this.setState(_.extend(this.state, {
                nameStatus: 'invalid',
                errors: {
                    'name': 'Name is required'
                }
            }));

            this.refs.confirmDialog.show();
        }
    },

    render () {
        var classes = new ClassMap('addelementdialog');

        var errorLabel;

        if (this.state.errors.length > 0) {
            errorLabel = (<Label label={this.state.errors.join("<br/>")} status="error" />);
        }

        return (
            <div className={classes}>
                <ConfirmDialog ref="confirmDialog" title="Add Repository" subTitle="Adds a new Repository to the overview" onAccept={this.addElement} onCancel={this.props.onClose}>
                    {errorLabel}
                    <Input ref="nameInput" type="text" label="Name" required status={this.state.nameStatus} helperText={this.state.errors["name"]} />
                    <Input ref="repoInput" type="text" label="Repository Path" icon="globe" required status={this.state.repoStatus} helperText={this.state.errors["repo"]} />
                </ConfirmDialog>
            </div>
        );
    }
});

module.exports = AddElementDialog;

