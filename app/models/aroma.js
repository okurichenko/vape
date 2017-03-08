import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  vendor: attr('string'),
  name: attr('string'),
  volume: attr('number'),

  userId: attr(),
});
