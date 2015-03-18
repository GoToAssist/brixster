var React = require('react/addons'),
    DataUtils = require('utils/DataUtils'),
    Icon = require('brixo-ui/elements/icon/icon'),
    ReactIf = require('shared/utils/react-if');

require('./modal.scss');

var MODAL_BACKDROP_CLASSNAME = 'modal-backdrop',
    MODAL_POPUP_CLASSNAME = 'modal-popup',
    MODAL_POPUP_CLOSE_BUTTON_CLASSNAME = 'modal-close-button';

var ModalPopup = React.createClass({
    stopPropagation: function (e) {
        e.stopPropagation();
    },
    propTypes: {
        closeButton: React.PropTypes.oneOf(['yes', 'no']),
        closeOnClickOutside: React.PropTypes.oneOf(['yes', 'no']),
        left: React.PropTypes.string,
        right: React.PropTypes.string,
        bottom: React.PropTypes.string,
        top: React.PropTypes.string,
        width: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            closeButton: 'yes',
            closeOnClickOutside: 'yes',
            left: 'auto',
            right: 'auto',
            top: 'auto',
            bottom: 'auto',
            width: '300px'
        };
    },
    render: function() {
        var classes = {};
        classes[MODAL_BACKDROP_CLASSNAME]      = true;
        classes[this.props.className]   = !!this.props.className;

        var style = {
            left: this.props.left,
            right: this.props.right,
            top: this.props.top,
            bottom: this.props.bottom,
            width: this.props.width
        };

        return (
            <div>
                <div className={React.addons.classSet(classes)} onClick={(this.props.closeOnClickOutside === 'yes') ? this.props.onRequestClose : DataUtils.noop}>
                </div>
                <div className={MODAL_POPUP_CLASSNAME} onClick={this.stopPropagation} style={style}>
                     {ReactIf((this.props.closeButton === 'yes'),
                         <div className={MODAL_POPUP_CLOSE_BUTTON_CLASSNAME} onClick={this.props.onRequestClose}>
                             <Icon icon='cancel'/>
                         </div>)
                         }
                    {this.props.children}
                </div>
            </div>
        );
    }
});


module.exports = ModalPopup;
