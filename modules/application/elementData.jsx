module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('element', JSON.stringify([
      {
        id: 'list',
        name: 'List',
        description: 'Default List Element',
        type: 'element',
        repository: 'https://github.com/GoToAssist/brixo-ui/tree/master/elements/list',
        maintainer: 'marcopeg',
        modified: '2015-02-25 18:00',
        ratings: [{ ip: '192.168.1.1', value: 5 }, { ip: '192.168.1.1', value: 1 }]
      }
    ]));
  }
};