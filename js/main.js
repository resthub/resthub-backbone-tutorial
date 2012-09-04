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

require(['models/task', 'collections/tasks', 'views/tasks'], function(Task, Tasks, TasksView) {

  window.Task = Task;
  window.tasks = new Tasks();

  var task1 = new Task({
    title: 'Learn Backbone',
    description: 'To write great Rich Internet Applications.'
  });

  var task2 = new Task({
    title: 'Learn RESThub',
    description: 'Use resthub.org.'
  });

  tasks.add(task1);
  tasks.add(task2);

  var tasksView = new TasksView({collection: tasks});
  $('#tasks').html(tasksView.render().el);

});
