import Ember from 'ember';

export default Ember.Route.extend({
  /*
  model() {
    return this.store.findAll('eliquid-base').then((bases) => {
      let promises = bases.map(base => base.destroyRecord());
      return Ember.RSVP.all(promises).then(() => {
        const bases = [
          '70 30 1',
          '70 30 1.5',
          '70 30 3',
          '50 50 1.5',
          '50 50 3',
          '80 20 1.5',
          '80 20 3',
        ];
        let savePromises = bases.map(e => {
          let pieces = e.split(' ');
          let base = this.store.createRecord('eliquid-base', {
            vg: pieces[0],
            pg: pieces[1],
            nicotine: pieces[2],
          });
          return base.save();
        });
        return Ember.RSVP.all(savePromises);
      });
    });
  },
  */
});
