import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  pg: attr('number'),
  vg: attr('number'),
  nicotine: attr('number'),

  name: Ember.computed('pg', 'vg', 'nicotine', function () {
    let { vg, pg, nicotine } = this.getProperties(['pg', 'vg', 'nicotine']);
    return `${vg}/${pg} ${nicotine}`;
  }),
});
