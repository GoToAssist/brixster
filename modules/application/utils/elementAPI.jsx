var ElementActions = require('../actions/elementActions');

module.exports = {

  getElementData: function() {
    var data = JSON.parse(localStorage.getItem('element'));
    ElementActions.receiveElements(data);
  }

};