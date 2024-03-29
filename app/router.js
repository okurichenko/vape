import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('recipes', function () {
      this.route('add');
      this.route('edit', { path: ':recipe_id' });
    });
    this.route('aromas', function () {
      this.route('add');
      this.route('edit', { path: ':aroma_id' });
    });
  });
  this.route('sign-in');
});

export default Router;
