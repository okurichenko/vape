import Ember from 'ember';

const {
  Controller,
  RSVP: { all },
} = Ember;

export default Controller.extend({
  actions: {
    save() {
      const aromaPromises = this.get('recipe.aromas').map(a => a.save());

      return all(aromaPromises).then(() => {
        this.get('recipe').save().then(() => {
          this.transitionToRoute('home.recipes.index');
        });
      });
    },
  },
});
