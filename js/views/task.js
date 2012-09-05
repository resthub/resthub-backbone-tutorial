define(['backbone', 'views/taskform', 'hbs!templates/task'], function(Backbone, TaskFormView, taskTemplate) {

  var TaskView = Backbone.View.extend({
    root: '.task-list',
    strategy: 'append',
    template: taskTemplate,
    className: 'task',
    events: {
      click: 'toggleDetails',
      dblclick: 'edit'
    },
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },
    render: function() {
      this.$el.fadeOut(function() {
        TaskView.__super__.render.apply(this);
        this.$el.fadeIn();
      }.bind(this));
      return this;
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
