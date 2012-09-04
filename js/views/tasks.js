define(['backbone', 'views/task', 'hbs!templates/tasks'], function(Backbone, TaskView, tasksTemplate) {

  var TasksView = Backbone.View.extend({
    root: '#tasks',
    template: tasksTemplate,
    initialize: function() {
      this.collection.on('add', this.add, this);
    },
    render: function() {
      TasksView.__super__.render.apply(this);
      this.collection.forEach(this.add, this);
      return this;
    },
    add: function(task) {
      var taskView = new TaskView({model: task});
      taskView.render();
    }
  });

  return TasksView;

});
