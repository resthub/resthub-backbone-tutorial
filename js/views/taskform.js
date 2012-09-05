define(['backbone', 'hbs!templates/taskform'], function(Backbone, taskFormTemplate) {

  var TaskFormView = Backbone.View.extend({
    template: taskFormTemplate,
    tagName: 'form',
    events: {
      submit: 'save',
      'click .cancel': 'cancel',
      'click .delete': 'delete'
    },
    save: function() {
      // Silent cause we want to manually force trigger change event even if
      // there were no actual changes to the fields.
      this.model.set({
        title: this.$('.title').val(),
        description: this.$('.description').val(),
      }, {silent: true});
      this.model.trigger('change', this.model);
      return false;
    },
    cancel: function() {
      this.model.trigger('change');
    },
    delete: function() {
      this.model.destroy();
    }
  });

  return TaskFormView;

});
