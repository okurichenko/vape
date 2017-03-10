import Ember from 'ember';

const {
  Controller,
  RSVP: { resolve },
} = Ember;

export default Controller.extend({
  actions: {
    save() {
      return this.get('model').save().then(() => {
        this.transitionToRoute('home.aromas.index');
      });
    },

    remove() {
      let promise = resolve();
      if (window.confirm('Do you want to remove aroma?')) {
        promise = this.get('model').destroyRecord();
      }
      return promise.then(() => {
        this.transitionToRoute('home.aromas.index');
      });
    },
  },
});
