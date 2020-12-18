<template>
  <div class="container" v-if="!isMobile">
    <Navbar />
    <div id="left-page">
      <ArrowPage direction="left" subtext="Officers" toLink="officers" />
    </div>
    <div id="right-page">
      <ArrowPage direction="right" subtext="Freshman's Guide" toLink="freshman-guide" />
    </div>
    <div id="scroll-down">
      <ScrollDown subtext="Scroll" />
    </div>
  </div>

</template>

<script>
import Navbar from "@/components/navigation/Navbar";
import ArrowPage from "@/components/icons/ArrowPage"
import ScrollDown from "@/components/icons/ScrollDown";
import global from "@/mixins/global.js";

export default {
  name: "index",
  mixins: [global],
  components: {
    Navbar,
    ArrowPage,
    ScrollDown
  },
  data() {
    return { m: "hello" };
  },
  mounted() {
    this.m = "hello";
  }

}
</script>

<style lang="scss">
  .container {
    height: 100vh;
    background-color: $background;
  }



</style>

