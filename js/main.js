require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'backbone-orig': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'backbone-validation': {
      deps: ['backbone'],
      exports: 'Backbone.Validation'
    },
    'backbone-localstorage': {
      deps: ['backbone'],
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
    'backbone-localstorage': 'libs/backbone.localStorage',
    'backbone-validation': 'libs/backbone-validation',
    'resthub-backbone-validation': 'libs/resthub/backbone-validation.ext',
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

require(['models/task', 'collections/tasks', 'views/tasks'], function(Task, Tasks, TasksView) {

  window.Task = Task;
  window.tasks = new Tasks();

  var tasksView = new TasksView({collection: tasks});
  tasks.fetch({ data: { page: 'no'} });

});
