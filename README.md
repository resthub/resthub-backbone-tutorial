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
* Add a nice fade effect to TaskView.
* In the console try adding a Task: thanks to the effect we can see that only
  one more Task is rendered and not the entirely list.
* In the console, update an existing Task: thanks to the effect we can see that
  just this task is updated.

Step 5
------

* Create TaskFormView which is rendered when double clicking on a TaskView.
* When the form is submitted, update the task with the changes and display it
  again -> note that the change event is not triggered when there was no
  changes at all.
* Add a button to create a new empty task. In TasksView, bind its click event
  to a create method which instantiate a new empty task with a TaskView which
  is directly editable.
* Note that you have to add the task to the collection otherwise when you
  render the whole collection again, the created tasks disappear.
* Add a delete button which delete a task.
* Note that we can't directly remove it from the collection cause the
  TaskFormView is not responsible for the collection management and does not
  have access to this one.
* Then use the model's destroy method and note that Backbone will automatically
  remove the dstroyed object from the collection on a destroy event.
* Note in the console that when removing a task manually in the collection, it
  does not disappear.
* Bind remove event on the collection to call task.destroy() in TasksView.
* Test again in the console.

Step 6
------

* Implement validate function in Task model: make sure that the title is not
  blank.
* In TaskFormView bind model's error event on a function which renders
  validation errors.
* Use Backbone.Validation for easy validation management.
* Note that Backbone.Validation can handle for you error displaying in your
  views.
