import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
} = DS;

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  volume: attr('number'),
  pg: attr('number'),
  vg: attr('number'),
  nicotine: attr('number'),
  brew: attr('number'),
  comment: attr('string'),

  userId: attr(),
  aromas: hasMany('aroma-expend'),
});
