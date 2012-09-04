require.config({
  shim: {
    'underscore': {
      exports:'_'
    },
    'handlebars': {
      exports:'Handlebars'
    },
    'backbone-orig': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: 'libs/jquery.min',
    underscore: 'libs/underscore',
    pubsub: 'libs/resthub/pubsub',
    'backbone-orig': 'libs/backbone',
    'resthub/jquery-event-destroyed': 'libs/resthub/jquery-event-destroyed',
    backbone: 'libs/resthub/backbone.ext',
    text: 'libs/text',
    handlebars: 'libs/handlebars',
    hbs: 'libs/require-handlebars',
  },
  config: {
    hbs: {
      extension: 'hbs'
    }
  }
});

require(['models/task', 'views/task'], function(Task, TaskView) {

  window.task = new Task({
    title: 'Learn Backbone',
    description: 'To write great Rich Internet Applications.'
  });

  var taskView = new TaskView({model: task});
  $('#tasks').html(taskView.render().el);

});
