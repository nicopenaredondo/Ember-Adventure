Todos.Todo = DS.Model.extend({
	title : DS.attr('string'),
	isCompleted : DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id : 1,
		title : 'Learning Ember.js',
		isCompleted : true
	},
	{
		id : 2,
		title : 'Doing Nothing',
		isCompleted : false
	},
	{
		id : 3,
		title : 'Still Doing Nothing',
		isCompleted : false
	}
]