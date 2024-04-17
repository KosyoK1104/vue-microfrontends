<template>
  <div class="app-two">
    <p class="text-2xl">Hello from app two</p>
    <button class="btn btn-primary" @click="onClick">Click me to show notification</button>
  </div>
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
.app-two{
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid crimson;
  position:relative;
}

.app-two:before{
  content: 'App Two';
  position: absolute;
  top: 0;
  left: 0;
  color: crimson;
  font-size: 11px;
}
</style>
