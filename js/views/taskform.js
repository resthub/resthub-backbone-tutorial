define(['backbone', 'hbs!templates/taskform'], function(Backbone, taskFormTemplate) {

  var TaskFormView = Backbone.View.extend({
    template: taskFormTemplate,
    tagName: 'form',
    events: {
      submit: 'save'
    },
    save: function() {
      this.model.set({
        title: this.$('.title').val(),
        description: this.$('.description').val(),
      }, {silent: true});
      this.model.trigger('change', this.model);
      return false;
    }
  });

  return TaskFormView;

});
