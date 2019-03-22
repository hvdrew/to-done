const mongoose = require('mongoose');

const todo = new mongoose.Schema(
	{
		name: {
			type: String
		},
		done: {
			type: Boolean
		}
	},
	{
			collection: 'todos'
	}
);

module.exports = mongoose.model('Todo', todo);