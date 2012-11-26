define(['backbone', 'resthub', 'hbs!template/task-form', 'backbone-validation'], function(Backbone, Resthub, taskFormTemplate) {

  var TaskFormView = Resthub.View.extend({
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
      this.model.set({
        title: this.$('.title-field').val(),
        description: this.$('.desc-field').val(),
      });
      this.model.save();
      return false;
    },
    cancel: function() {
      this.model.trigger('change');
    },
    delete: function() {
      this.model.destroy();
      return false;
    }
  });

  return TaskFormView;

});
