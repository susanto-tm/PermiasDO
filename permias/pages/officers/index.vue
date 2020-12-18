<template>
  <div class="officers">
    <template v-for="officer in officerList">
      <Officer :key="officer.id" :officer="officer" />
    </template>
  </div>
</template>

<script>
import Officer from "@/components/Officer";
export default {
  name: "index",
  components: {
    Officer
  },
  async asyncData({ $axios }) {
    try {
      let officerList = await $axios.$get('/officers/');
      return { officerList };
    } catch (e) {
      return { officerList: [] }
    }

  },
  data() {
    return { officerList: [] }
  }
}
</script>

<style scoped>

</style>