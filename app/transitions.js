import Ember from 'ember';

export default function () {
  const duration = Ember.testing ? 0 : 300;
  if (Ember.testing) {
    this.setDefault({ duration });
  }

  this.transition(
    this.fromRoute('home.index'),
    this.toRoute('home.recipe'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('home.add-recipe'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.toRoute('home.add-aroma'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
