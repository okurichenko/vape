import Ember from 'ember';

export default Ember.Route.extend({
  timeStart: null,

  beforeModel() {
    this._super(...arguments);
    this.set('timeStart', new Date().getTime());
  },

  model() {
    return this.store.query('geo-int', {
      orderBy: 'lat',
      startAt: 5050000000,
    });
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('timeDiff', (new Date().getTime() - this.get('timeStart')));
  },

});
