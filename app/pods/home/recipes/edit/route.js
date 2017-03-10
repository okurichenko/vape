import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model(params) {
    return hash({
      recipe: this.store.findRecord('recipe', params.recipe_id),
      bases: this.store.findAll('eliquid-base'),
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },
});
