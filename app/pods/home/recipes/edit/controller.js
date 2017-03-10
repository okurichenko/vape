import Ember from 'ember';

const {
  Controller,
  RSVP: { resolve },
} = Ember;

export default Controller.extend({
  actions: {
    save() {
      return this.get('recipe').save().then(() => {
        this.transitionToRoute('home.recipes.index');
      });
    },

    remove() {
      let promise = resolve();
      if (window.confirm('Do you want to remove recipe?')) {
        promise = this.get('recipe').destroyRecord();
      }
      return promise.then(() => {
        this.transitionToRoute('home.recipes.index');
      });
    },
  },
});
