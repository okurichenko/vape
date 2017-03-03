import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' }, function() {
    this.route('recipe', { path: '/recipe/:recipe_id' });
    this.route('add-recipe');
    this.route('aromas');
    this.route('stock');
  });
});

export default Router;
