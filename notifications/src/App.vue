<template>
  <div class="absolute top-0 right-0 p-4 notifications" v-if="notifications.length !== 0">
    <TransitionGroup name="fade" tag="div">
      <NotificationItem v-for="(notification, index) in notifications" :key="index" :message="notification.message" :type="notification.type"/>
    </TransitionGroup>
  </div>
</template>

<script>
import {eventDispatcher} from "@kkostadinov/root-config";
import NotificationItem from "@/components/NotificationItem.vue";
export default {
  name: 'App',
  components: {NotificationItem},
  data() {
    return {
      notifications: [],
      intervals: []
    }
  },
  mounted() {
    eventDispatcher.listen('notification', (notification) => {
      this.notifications.push(notification)
      const interval = setInterval(() => {
        this.notifications.shift()
        this.intervals.shift()
      }, 5000)
      this.intervals.push(interval)
    })
  }
}
</script>

<style>
.notifications{
  border: 1px solid navy;
  position: relative;
}

.notifications:before{
  content: 'Notifications';
  position: absolute;
  top: 0;
  left: 0;
  color: navy;
  font-size: 11px;
}
</style>
