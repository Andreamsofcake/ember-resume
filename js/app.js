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

// App.BlogRoute = Ember.Route.extend({
//   model: function handleResponse(response) {
//                       console.log(response);
//                       var posts = response.items;
//                       posts.forEach(function(post){
//                         var date = post.published;
//                       document.getElementById("content")
//                       .innerHTML += "<h3>" + post.title 
//                       + "</h3>" + "<h4>" + "Published" + " " + moment(date).format('MMM DD YYYY h:mmA') + "<h4>" 
//                       + "<p>" + post.content + "</p>";
//                       });
//                     }
// });
