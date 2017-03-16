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
      aromas: this.store.query('aroma', {
        orderBy: 'userId',
        equalTo: this.get('session.currentUser.uid'),
      }),
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },
});
