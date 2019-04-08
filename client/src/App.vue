<template>
  <div id="app">
    <b-container>
      <b-row>
      <b-col>
        <img alt="Vue logo" src="./assets/logo.png">
      </b-col>
      <b-col>
        <TodoForm />
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm'

export default {
  name: 'app',
  components: {
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
