import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model() {
    const recipe = this.store.createRecord('recipe', {
      userId: this.get('session.currentUser.uid'),
    });
    return hash({
      recipe,
      bases: this.store.findAll('eliquid-base'),
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },
});
