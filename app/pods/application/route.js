import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {

    return this.store.findAll('aroma').then(aromas => {
      let aromaExpend = this.store.createRecord('aroma-expend', {
        aroma: aromas.get('firstObject'),
        volume: 1.1,
      });
      return aromaExpend.save().then(ae => {
        let recipe = this.store.createRecord('recipe', {
          type: 'test',
          volume: 10,
          pg: 20,
          vg: 80,
          nicotine: 1.5,
          brew: 24,
          comment: '',
          aromas: [ae]
        });
        return recipe.save();
      });
    });
  },

  model() {
    return this.store.findAll('recipe');
  },
});
