define(['backbone', 'hbs!templates/tasks'], function(Backbone, tasksTemplate) {

  var TasksView = Backbone.View.extend({
    initialize: function() {
      this.collection.on('add', this.render, this);
    },
    render: function() {
      this.$el.fadeOut(function() {
        this.$el.html(tasksTemplate(this.collection.toJSON()));
        this.$el.fadeIn();
      }.bind(this));
      return this;
    }
  });

  return TasksView;

});
