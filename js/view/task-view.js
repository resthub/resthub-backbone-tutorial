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
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
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
