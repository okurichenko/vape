import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  classNameBindings: ['editing'],

  click() {
    console.log('editing');
    this.set('editing', true);
  },

  actions: {
    save() {
      this.get('aroma').save().then(() => {
        this.set('editing', false);
      });
    },
  },
});
