<template>
  <div class="container" v-if="!isMobile">
    <div v-if="$store.state.navigation === 'main'">
      <Navbar />
    </div>
    <div class="sidebar-content" v-else>
        <div id="sidebar">
          <SideNavbar />
        </div>
      <div class="content-container">
        <div class="text-container">
          <DefaultText header="About us" :text="aboutText" />
        </div>
      </div>
    </div>
    <div id="scroll-down">
      <ScrollDown subtext="Officers" />
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js"
import SideNavbar from "@/components/navigation/SideNavbar";
import Navbar from "@/components/navigation/Navbar";
import ScrollDown from "@/components/icons/ScrollDown";
import DefaultText from "@/components/text/DefaultText";

export default {
  name: "about-us",
  mixins: [global],
  components: {
    DefaultText,
    ScrollDown,
    Navbar,
    SideNavbar
  },
  data() {
    return { aboutText: "Lorem ipsum dolor sit amet, " +
          "consectetur adipiscing elit. Cras ultricies mi a " +
          "ligula feugiat tempus. Morbi tempor vulputate nunc, " +
          "ac tincidunt elit volutpat sit amet. Mauris convallis " +
          "odio sed est semper, ac semper eros posuere. Vestibulum " +
          "id mauris ex. Donec rutrum porta odio, sed faucibus " +
          "ipsum tincidunt vitae. Vestibulum velit arcu, consectetur " +
          "ac elit quis, vehicula semper lorem. Aenean luctus dictum ex, " +
          "eu luctus lorem scelerisque et. Morbi vestibulum dapibus faucibus. " +
          "Phasellus commodo erat vel egestas semper. Proin pharetra iaculis " +
          "turpis, vel aliquet sapien vehicula in. Sed vitae euismod metus, " +
          "sed suscipit ipsum. Vivamus pellentesque dignissim purus maximus " +
          "finibus. Cras." }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: $offBlack;
    height: 100vh;
  }

  .container > .sidebar-content {
    display: flex;
    flex-direction: row;
  }

  .content-container {
    height: 100vh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-container {
    width: 75%;
    margin: auto auto;
  }



</style>