define(['model/task', 'collection/tasks', 'view/tasks'], function(Task, Tasks, TasksView) {
    window.Task = Task;
  	window.tasks = new Tasks();

  	var tasksView = new TasksView({collection: tasks});
  	tasks.fetch();
});