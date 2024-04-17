<template>
  <div class="app-one">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app-one{
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid lightgreen;
  position:relative;
}

.app-one:before{
  content: 'App One';
  position: absolute;
  top: 0;
  left: 0;
  color: lightgreen;
  font-size: 11px;
}
</style>
