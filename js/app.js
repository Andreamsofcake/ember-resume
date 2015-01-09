App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('portfolio');
  this.route('resume');
  this.route('blog');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Passionate about writing quality code', 'Excited about making a difference as part of a team', 'Fast learner even faster innovator'];
  }
});
