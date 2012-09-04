define(['backbone', 'hbs!templates/tasks'], function(Backbone, tasksTemplate) {

  var TasksView = Backbone.View.extend({
    render: function() {
      this.$el.html(tasksTemplate(this.collection.toJSON()));
      return this;
    }
  });

  return TasksView;

});
