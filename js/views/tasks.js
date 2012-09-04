define(['backbone', 'views/task', 'hbs!templates/tasks'], function(Backbone, TaskView, tasksTemplate) {

  var TasksView = Backbone.View.extend({
    initialize: function() {
      this.collection.on('add', this.add, this);
    },
    render: function() {
      this.$el.fadeOut(function() {
        this.$el.html(tasksTemplate(this.collection.toJSON()));
        this.collection.forEach(this.add, this);
        this.$el.fadeIn();
      }.bind(this));
      return this;
    },
    add: function(task) {
      var taskView = new TaskView({model: task});
      taskView.render().$el.hide().appendTo(this.$('.task-list')).fadeIn();
    }
  });

  return TasksView;

});
