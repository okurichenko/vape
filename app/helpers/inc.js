import Ember from 'ember';

export function inc(params) {
  let i = params[0];
  return i++;
}

export default Ember.Helper.helper(inc);
