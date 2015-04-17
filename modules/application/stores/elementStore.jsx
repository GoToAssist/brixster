var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ElementConstants = require('../constants/elementConstants');
var _ = require('lodash');

var _elements = {};

function add(id, update) {
  _elements[id] = _.merge({}, _elements[id], update)
}

function rateElement(id, rating) {
  _elements[id].ratings.push(rating);
}

function loadElementData(data) {
  _elements = data;
}

function removeElement(id) {
  delete _elements[id];
}

var ElementStore = _.merge({}, EventEmitter.prototype, {

  getElements: function() {
    return _elements;
  },

  getElementCount: function() {
    return Object.keys(_elements).length;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case ElementConstants.ELEMENT_ADD:
      add(action.id, action.update);
      break;

    case ElementConstants.ELEMENT_RATE:
      rateElement(action.id, action.rating);
      break;

    case ElementConstants.ELEMENT_REMOVE:
      removeElement(action.id);
      break;

    case ElementConstants.RECEIVE_DATA:
      loadElementData(action.data);
      break;

    default:
      return true;
  }

  ElementStore.emitChange();

  return true;

});

module.exports = ElementStore;