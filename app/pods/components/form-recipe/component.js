import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  types: [
    'test',
    'control',
    'prod',
  ],
  bases: [],

  typesOrdered: Ember.computed('types.[]', function () {
    const types = this.get('types');
    const selected = this.get('model.type');
    if (this.get('model.type')) {
      types.removeObject(selected);
      types.unshiftObject(selected);
    }
    return types;
  }),

  didReceiveAttrs() {
    if (!this.get('model.type')) {
      this.set('model.type', this.get('types.firstObject'));
    }

    if (!this.get('model.eliquidBase.id')) {
      this.set('model.eliquidBase', this.get('bases.firstObject'));
    }
  },

  actions: {
    addAromaExpend() {
      const aromaExpend = this.get('store').createRecord('aromaExpend');
      const model = this.get('model');
      model.get('aromas').pushObject(aromaExpend);
    },

    removeAromaExpend(aromaExpend) {
      this.get('model.aromas').removeObject(aromaExpend);
    },

    setBase(event) {
      this.set('model.eliquidBase', this.get('bases').findBy('id', event.target.value));
    },

    setAroma(aromaExpend, option) {
      const selectedAroma = this.get('aromas').findBy('id', option);
      aromaExpend.set('aroma', selectedAroma);
    },

    setType(event) {
      this.set('model.type', event.target.value);
    },
  },
});
