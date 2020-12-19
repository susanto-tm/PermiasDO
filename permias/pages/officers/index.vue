<template>
  <div class="container">
    <Navbar active="" />
    <div id="gallery">
      <Gallery mode="officers" setting="overview" :gallery="officerList" />
    </div>
  </div>
</template>

<script>
import Officer from "@/components/Officer";
import Gallery from "@/components/Gallery";
import SlideNavigation from "@/components/icons/SlideNavigation";
import Navbar from "@/components/navigation/Navbar";

export default {
  name: "index",
  components: {
    Navbar,
    SlideNavigation,
    Officer,
    Gallery
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

<style lang="scss" scoped>
  .container {
    background-color: $offBlack;
    height: 100vh;
  }
</style>