/**
 * Future home of the DB Util class.
 * 
 * Will assist with CRUD operations by handling them within one single class instance.
 * This should make expansion easier as it will let us update the functionality for the
 * entire app in just one place.
 */
const Todo = require('../models/Todo');

module.exports = class DataBase {
	static create() {
		// Create a new todo
	}
	
	static read(callback) {
		// Fetch all todos
	}

	static update() {
		// Update a todo by ID
	}

	static delete() {
		// Delete a todo by ID
	}
}