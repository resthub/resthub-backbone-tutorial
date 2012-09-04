define(['backbone', 'hbs!templates/task'], function(Backbone, taskTemplate) {

  var TaskView = Backbone.View.extend({
    render: function() {
      this.$el.html(taskTemplate(this.model.toJSON()));
      return this;
    }
  });

  return TaskView;
});
