import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
  belongsTo,
} = DS;

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  volume: attr('number'),
  brew: attr('number'),
  comment: attr('string'),
  rating: attr('number'),

  userId: attr(),
  aromas: hasMany('aroma-expend'),
  eliquidBase: belongsTo('eliquid-base'),
});
