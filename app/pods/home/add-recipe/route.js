import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('aroma', {
      userId: this.get('session.currentUser.uid')
    });
  }
});
