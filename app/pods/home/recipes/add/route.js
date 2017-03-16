import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model() {
    const currentUserId = this.get('session.currentUser.uid');
    const aromaExpend = this.store.createRecord('aroma-expend');
    const recipe = this.store.createRecord('recipe', {
      userId: currentUserId,
    });
    recipe.get('aromas').pushObject(aromaExpend);
    return hash({
      recipe,
      bases: this.store.findAll('eliquid-base'),
      aromas: this.store.query('aroma', {
        orderBy: 'userId',
        equalTo: currentUserId,
      }),
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },
});
