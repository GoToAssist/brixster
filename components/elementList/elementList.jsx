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
        console.log("rendering elementList");

        var classes = new ClassMap('elementlist');
        var elements = this.props.elements;

        return (
            <div className={classes}>
                <List type="table" variation="celled" cols="14% 14% 14% 14% 14% 14%">
                    <List.Item role="header">
                        <List.Col width="10%">Element</List.Col>
                        <List.Col width="20%">Description</List.Col>
                        <List.Col width="20%">Repo</List.Col>
                        <List.Col width="10%">Maintainers</List.Col>
                        <List.Col width="10%">Modified</List.Col>
                        <List.Col width="10%">Rating</List.Col>
                        <List.Col width="10%">Rate it</List.Col>
                    </List.Item>

                    {Object.keys(elements).map(function(id) {
                        var element = elements[id];
                        return ( <List.Item key={id}>
                                    <List.Col width="10%">{element.name}</List.Col>
                                    <List.Col width="20%">{element.description}</List.Col>
                                    <List.Col width="20%">{element.repository}</List.Col>
                                    <List.Col width="10%">{element.maintainer}</List.Col>
                                    <List.Col width="10%">{element.modified}</List.Col>
                                    <List.Col width="10%">{element.ratings}</List.Col>
                                    <List.Col width="10%"><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/><Icon icon="star"/></List.Col>
                                 </List.Item> );
                    })}
                </List>
            </div>
        );
    }
});

module.exports = ElementList;

