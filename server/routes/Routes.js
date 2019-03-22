const express = require('express');
const Todo = require('../models/Todo');
const DB = require('../util/Database');

// Router definition
const todoRoutes = express.Router();


// FETCH ALL TODOS
todoRoutes.route('/all').get((req, res, next) => {
	Todo.find((error, todos) => {
		// Check for an error, if any then throw
		if (error) {
			return next(new Error(error));
		}

		// callback(todos);
		res.status(200).json(todos)
	});
});


// CREATE NEW TODO
todoRoutes.route('/add').post((req, res) => {
	Todo.create({ name: req.body.name, done: false }, (error, todo) => {
		if (error) {
			res.status(400).send('Unable to create todo list');
		}

		res.status(200).json(todo);
	});
});


// DELETE TODO
todoRoutes.route('/delete/:id').get((req, res, next) => {
	let id = req.params.id;
	Todo.findByIdAndRemove(id, (error, todo) => {
		if (error) {
			return next(new Error('Todo was not found.'));
		}

		res.json('Successfully removed.');
	});
});


// UPDATE A TODO
todoRoutes.route('/update/:id').post((req, res, next) => {
	let id = req.params.id;
	Todo.findById(id, (error, todo) => {
		if (error) {
			return next(new Error('Todo was not found.'));
		}

		todo.name = req.body.name;
		todo.done = req.body.done;

		todo.save((error, todo) => {
			if (error) {
				res.status(400).send('Unable to update todo');
			}
		});
	});
});

module.exports = todoRoutes;