var React = require('react');
var Modal = require('./modal.jsx');
var ModalTrigger = require('./modalTrigger');
var ModalPopup = require('./modalPopup');
var Icon = require('brixo-ui/elements/icon/icon');
var Button = require('brixo-ui/elements/button/button');
require('../../shared/styles/demo-page.scss');

module.exports = React.createClass({
    render: function () {
        return (
            <Modal className='tmp'>
                <ModalTrigger>
                    <Icon icon='cog' />
                </ModalTrigger>
                <ModalPopup closeButton='yes' closeOnClickOutside='yes' anchorAtTrigger='true'>
                    I am the content of the modal!
                </ModalPopup>
            </Modal>
        );
    }
});