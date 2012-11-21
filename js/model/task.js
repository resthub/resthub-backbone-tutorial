define(['backbone'], function(Backbone) {

  var Task = Backbone.Model.extend({
    validation: {
      title: {
        required: true,
        msg: 'A title is required.'
      }
    }
  });

  return Task;

});
