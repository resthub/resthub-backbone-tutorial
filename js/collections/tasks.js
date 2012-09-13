define(['backbone', 'models/task'], function(Backbone, Task) {

  var Tasks = Backbone.Collection.extend({
    url: 'api/task',
    model: Task
  });

  return Tasks;

});
