import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
} = DS;

export default Model.extend({
  name: attr(),
  type: attr(),
  volume: attr(),
  pg: attr(),
  vg: attr(),
  nicotine: attr(),
  brew: attr(),
  comment: attr(),
  aromas: hasMany('aroma-expend'),
});
