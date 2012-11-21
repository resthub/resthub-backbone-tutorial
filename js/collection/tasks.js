define(['backbone', 'model/task', 'backbone-localstorage'], function(Backbone, Task) {

  var Tasks = Backbone.Collection.extend({
    model: Task,
    localStorage: new Backbone.LocalStorage("SomeCollection"),
  });

  return Tasks;

});
