var AppDispatcher = require('../dispatcher/AppDispatcher');
var ElementConstants = require('../constants/elementConstants');

var ElementActions = {

  receiveElements: function(data) {
    AppDispatcher.handleAction({
      actionType: ElementConstants.RECEIVE_DATA,
      data: data
    })
  },

  selectElement: function(index) {
    AppDispatcher.handleAction({
      actionType: ElementConstants.SELECT_PRODUCT,
      data: index
    })
  },

  addElement: function(id, update) {
    AppDispatcher.handleAction({
      actionType: ElementConstants.ELEMENT_ADD,
      id: id,
      update: update
    })
  },

  removeElement: function(id) {
    AppDispatcher.handleAction({
      actionType: ElementConstants.ELEMENT_REMOVE,
      id: id
    })
  },

  rateElement: function(id, rating) {
    AppDispatcher.handleAction({
      actionType: ElementConstants.ELEMENT_RATE,
      id: id, 
      rating: rating
    })
  }

};

module.exports = ElementActions;