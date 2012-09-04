define(['backbone', 'hbs!templates/task'], function(Backbone, taskTemplate) {

  var TaskView = Backbone.View.extend({
    initialize: function() {
      this.model.on('change', this.render, this);
    },
    render: function() {
      this.$el.html(taskTemplate(this.model.toJSON()));
      return this;
    }
  });

  return TaskView;
});
