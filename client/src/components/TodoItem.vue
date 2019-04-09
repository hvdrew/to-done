<template>
	<b-list-group-item
		@click="completeTodo"
	>{{ todo.name }} : Done? {{ todo.done }}</b-list-group-item>
</template>

<script>
import axios from 'axios'

export default {
	props: {
		todo: {
			type: Object,
			required: true
		}
	}, data: function() {
		return {
			// IDK
		};
	},
	methods: {
		completeTodo: function() {
			let todoData = new FormData();
			todoData.set('done', !this.props.todo.done);
			todoData.set('name', this.props.todo.name);
			
			axois({
				method: 'post',
				url: 'http://localhost:3000/update/' + todo._id,
				data: todoData,
				config: { headers: {'Content-Type': 'multipart/form-data' }}
			})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log('Error updating todo.');
				});
		
		}
	}
}
</script>
