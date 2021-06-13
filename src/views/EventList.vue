<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      events: null
    }
  },
  created () {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
