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

require([], function() {

  console.log('Hello!');

});
