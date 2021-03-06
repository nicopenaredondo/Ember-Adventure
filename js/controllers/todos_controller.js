Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function(){
			// get the todo title set by the "New Todo" text field
			var title = this.get('newTitle');
			console.log(title);
			if (!title.trim()) { return; }

			//create new todo model
			var todo = this.store.createRecord('todo',{
				title: title,
				isCompleted: false
			});

			//clear the  "New Todo" text field
			this.set('newTitle','');

			//save the new model
			todo.save();
		}
	},

	isEditing: false,

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});