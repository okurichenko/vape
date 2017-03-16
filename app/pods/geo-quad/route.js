import Ember from 'ember';

export default Ember.Route.extend({
  timeStart: null,

  beforeModel() {
    this._super(...arguments);
    this.set('timeStart', new Date().getTime());
  },

  model() {
    return this.store.query('geo-quad', {
      orderBy: 'quadtree',
      startAt: '102321011303',
    }).then(records => {
      return records.filter(item => {
        return item.get('quadtree').startsWith('102321011303');
      });
    });
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('timeDiff', (new Date().getTime() - this.get('timeStart')));
  },

});
