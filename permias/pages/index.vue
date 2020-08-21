<template>
  <div class="container">
    <Navbar />
    <section id="about"></section>
    <section id="gallery"></section>
    <section id="officers">
        <template v-for="officer in officerList">
          <div :key="officer.id">
            <Officer :officer="officer" />
          </div>
        </template>
    </section>
    <section id="freshman-guide"></section>
    <section id="contact"></section>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  // import Officers from "@/components/Officers"
  import Officer from "@/components/Officer";

  export default {
    components: {
      Navbar,
      Officer
      // Officers
    },
    async asyncData({ $axios }) {
      try {
        let officerList = await $axios.$get('/officers/');
        console.log(officerList);
        return { officerList };
      } catch(e) {
        return { officerList: [] }
      }
    },
    data() {
      return {officerList: [] }
    }
  }
</script>

<style lang="scss">
  .container {
    width: 100%;
    min-height: 100vh;
  }
</style>

