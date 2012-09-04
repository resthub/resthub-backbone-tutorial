RESThub-Backbone training
=========================

Step 1
------

* Base application structure.
* Create a Task model.
* Instantiate a task in main.js with attributes.
* Try to inspect in the console -> explain scope/globals.
* Inspect task -> see attributes.

* Create a TaskView and a Task handlebars template.
* Implement render: rendering is done in $el.
* Instantiate the view with a task model in main.
* render the view and attach $el to the DOM.
* Update task in the console -> does not update the HTML.

* Bind model's change event in the view to render.
* Update task in the console -> the HTML is magically updated!
