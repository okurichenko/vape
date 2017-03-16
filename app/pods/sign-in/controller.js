import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn(provider) {
      return this.get('session').open('firebase', { provider }).then(() => {
        return this.transitionToRoute('home');
      });
    },
  },
});
