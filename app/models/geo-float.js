import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  lat: attr('number'),
  lng: attr('number'),
});
