import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
} = DS;

export default Model.extend({
  volume: attr('number'),

  aroma: belongsTo('aroma'),
});
