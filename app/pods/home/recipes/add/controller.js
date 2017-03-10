import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      return this.get('recipe').save().then(() => {
        this.transitionToRoute('home.recipes.index');
      });
    },
  },
});
