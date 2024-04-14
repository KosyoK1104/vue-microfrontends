<template>
  <div class="alert" :class="{
    'alert-success': type === 'success',
    'alert-danger': type === 'error',
    'alert-warning': type === 'warning',
    'alert-info': type === 'info'
  }" role="alert"
  style="width: 300px">
    <h5 class="alert-heading">
      {{ typeMessage }}
    </h5>
    <hr>
    <p class="mb-0">{{ message }}</p>
  </div>
</template>

<script setup>
import {computed, defineProps} from "vue"

const props = defineProps({
  message: String,
  type: String
})

const typeMessage = computed(() => {
  if (props.type === 'success') {
    return 'Success'
  }
  if (props.type === 'error') {
    return 'Error'
  }
  if (props.type === 'warning') {
    return 'Warning'
  }
  if (props.type === 'info') {
    return 'Info'
  }
  return 'Notification'
})
</script>

<style scoped>

</style>