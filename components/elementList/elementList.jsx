var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./elementList.scss');

var List = require('brixo-ui/elements/list/list');
var Icon = require('brixo-ui/elements/icon/icon');

var ElementActions = require('../../modules/application/actions/elementActions');

var ElementList = React.createClass({
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
        var classes = new ClassMap('elementlist');

        return (
            <div className={classes}>
                <List type="table" variation="celled" cols="14% 14% 14% 14% 14% 14%">
                    <List.Item role="header">
                        <List.Col>Element</List.Col>
                        <List.Col>Description</List.Col>
                        <List.Col>Repo</List.Col>
                        <List.Col>Maintainers</List.Col>
                        <List.Col>Modified</List.Col>
                        <List.Col>Rating</List.Col>
                        <List.Col>Rate it</List.Col>
                    </List.Item>

                    {this.props.elements.map(function(element) {
                        return ( <List.Item key={element.id}>
                                    <List.Col>{element.name}</List.Col>
                                    <List.Col>{element.description}</List.Col>
                                    <List.Col>{element.repository}</List.Col>
                                    <List.Col>{element.maintainer}</List.Col>
                                    <List.Col>{element.modified}</List.Col>
                                    <List.Col>{element.ratings}</List.Col>
                                    <List.Col><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/></List.Col>
                                 </List.Item> );
                    })}
                </List>
            </div>
        );
    }
});

module.exports = ElementList;

