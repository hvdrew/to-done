<template>
	<div>
		<b-form-input
			v-model="newTodo"
			@keydown.enter="addTodo"
			type="text"
			placeholder="I need to..."
		/>
		<p>{{todos}}</p>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data: function() {
		return {
			todos: [],
			newTodo: '',
			error: false
		}
	},
	created: function() {
		this.fetchTodo();
	},
	methods: {
		fetchTodo: function() {
			let url = 'http://localhost:3000/api/all';
			axios.get(url).then((response) => {
				this.todos = response.data;
			});
		},
		clearTodoField: function() {
			this.newTodo = '';
		},
		addTodo: function() {
			let url = 'http://localhost:3000/api/add';
			let param = {
				name: this.newTodo,
				done: 0
			};

			axios.post(url, param).then((response) => {
				if (response.status != 200) {
					// This should never happen
				}
				
				this.clearTodoField();
				this.fetchTodo();
			}).catch((error) => {
				this.error = true;
				// eslint-disable-next-line no-console
				console.log(error);
			});
		}
	}
}
</script>
