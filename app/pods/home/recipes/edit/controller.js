import Ember from 'ember';

const {
  Controller,
  RSVP: { resolve, all },
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

    remove() {
      if (window.confirm('Do you want to remove recipe?')) {
        const aromaExpendPromises = this.get('recipe.aromas').map(a => a.destroyRecord());

        return all(aromaExpendPromises).then(() => {
          return this.get('recipe').destroyRecord().then(() => {
            this.transitionToRoute('home.recipes.index');
          });
        });
      }
      return resolve();
    },
  },
});
