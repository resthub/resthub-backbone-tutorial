define(['backbone', 'resthub', 'view/task-view', 'hbs!template/tasks'], function(Backbone, Resthub, TaskView, tasksTemplate) {

  var TasksView = Resthub.View.extend({
    root: '#tasks',
    template: tasksTemplate,
    events: {
      'click #create': 'create'
    },
    initialize: function() {
      this.render();
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
    },
    create: function() {
      var task = new Task();
      // Silent cause we do not want to render but to be in edit mode
      this.collection.add(task, {silent: true});
      var taskView = new TaskView({model: task});
      taskView.edit();
    }
  });

  return TasksView;

});
