define(['backbone', 'hbs!templates/taskform', 'resthub-backbone-validation'], function(Backbone, taskFormTemplate) {

  var TaskFormView = Backbone.View.extend({
    template: taskFormTemplate,
    tagName: 'form',
    events: {
      submit: 'save',
      'click .cancel': 'cancel',
      'click .delete': 'delete'
    },
    initialize: function() {
      Backbone.Validation.bind(this);
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
    }
  });

  return TaskFormView;

});
