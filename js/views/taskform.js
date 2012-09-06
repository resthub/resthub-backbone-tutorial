define(['backbone', 'hbs!templates/taskform'], function(Backbone, taskFormTemplate) {

  var TaskFormView = Backbone.View.extend({
    template: taskFormTemplate,
    tagName: 'form',
    events: {
      submit: 'save',
      'click .cancel': 'cancel',
      'click .delete': 'delete'
    },
    initialize: function() {
      this.model.on('error', this.error, this);
    },
    save: function() {

      var success = this.model.set({
        title: this.$('.title-field').val(),
        description: this.$('.desc-field').val(),
      });

      // If validation passed, manually force trigger
      // change event even if there were no actual
      // changes to the fields.
      if (success) {
        this.model.trigger('change');
      }

      return false;
    },
    cancel: function() {
      this.model.trigger('change');
    },
    delete: function() {
      this.model.destroy();
    },
    error: function(model, error) {
      this.$('.control-group:first-child').addClass('error');
      this.$('.help-inline').html(error);
    }
  });

  return TaskFormView;

});
