<template>
  <p class="text-2xl">Hello from app two</p>
<button class="btn btn-primary" @click="onClick">Click me to show notification</button>
</template>

<script>
import {useNotification} from "@kkostadinov/notifications";
export default {
  name: 'App',
  methods:{
    onClick(){
      useNotification().success('Hello from app two')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
