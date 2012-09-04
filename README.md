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

Step 2
------

* Create a Todos collection.
* Create a TodosView and a todos template.
* Implement rendering in TodosView.
* Pass the collection as context.
* Iterate through the items in the collection in the template.
* try adding an item to the collection in the console.

* Bind collection's add event in the view to render.
* Add a nice fade effect.
* Add a task to the collection in the console -> the *whole* HTML in
  rerendered.

Step 3
------

* Remove the each block in the view.
* Use TaskView in TasksView to render each tasks.
* Update a task in the console -> the HTML for the task is automatically
  updated.
* Add tasks to the collection in the console -> the *whole* list is still
  rerendered.
* Update TasksView to only append one task when added to the collection instead
  of rendering the whole list again.
* Test in the console.
* Manage click in TaskView to toggle task's details visibility.

Step 4
------

* Use RESThub facilities for managing rendering: Add a root, rendering strategy
  and template to the views.
* Call the parent render function in TasksView.
