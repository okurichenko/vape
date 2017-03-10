import Ember from 'ember';

export default function () {
  const duration = Ember.testing ? 0 : 300;
  if (Ember.testing) {
    this.setDefault({ duration });
  }

  this.transition(
    this.fromRoute('home.recipes'),
    this.toRoute('home.aromas'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute(/^home\.(aromas|recipes)\.index/),
    this.toRoute(/^home\.(aromas|recipes)\.(add|edit)/),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
