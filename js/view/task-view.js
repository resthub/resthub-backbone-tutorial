define(['backbone', 'resthub', 'view/task-form-view', 'hbs!template/task'], function(Backbone, Resthub, TaskFormView, taskTemplate) {

  var TaskView = Resthub.View.extend({
    root: '.task-list',
    strategy: 'append',
    template: taskTemplate,
    tagName: 'li',
    className: 'task',
    events: {
      click: 'toggleDetails',
      dblclick: 'edit'
    },
    initialize: function() {
      this.model.on('sync', this.render, this);
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },
    edit: function() {
      var taskFormView = new TaskFormView({root: this.$el, model: this.model});
      taskFormView.render();
    },
    toggleDetails: function() {
      this.$('p').slideToggle();
    }
  });

  return TaskView;
});
