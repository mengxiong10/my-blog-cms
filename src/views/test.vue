<template>
  <v-date v-model="date"></v-date>
</template>

<script>
import VDate from 'components/v-dt.vue'

export default {
  components: { VDate },
  data() {
    return {
      date: '2017-4-20',
    }
  },
}

</script>