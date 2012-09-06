define(['backbone'], function(Backbone) {

  var Task = Backbone.Model.extend({
    validate: function(attrs) {
      if (/^\s*$/.test(attrs.title)) {
        return 'Title cannot be blank.';
      }
    }
  });

  return Task;

});
