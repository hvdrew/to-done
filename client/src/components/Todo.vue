<template>
	<div>
		<p>Name: {{ todo.name }}; Done: {{ todo.done }}; ID: {{ todo._id }}</p>
	</div>
</template>

<script>
export default {
	props: {
		todo: {
			type: Object,
			required: true
		}
	}
}
</script>
