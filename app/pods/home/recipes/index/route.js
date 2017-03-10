import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('recipe', {
      orderBy: 'userId',
      equalTo: this.get('session.currentUser.uid'),
    });
  },
});
