<template>
  <div class="container">
    <div class="officer-gallery">
      <Gallery mode="officers" setting="officerBio" :gallery="officerList" />
    </div>
    <div class="officer-bio-container">
      <OfficerBio class="officer-details" :officer="officerList[officerId]" />
      <div id="slide-navigation">
        <SlideNavigation />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Gallery from "@/components/Gallery";
import OfficerBio from "@/components/text/OfficerBio";
import SlideNavigation from "@/components/icons/SlideNavigation";

export default {
  name: "all-officers",
  components: {
    SlideNavigation,
    OfficerBio,
    Gallery
  },
  computed: {
    ...mapGetters({
      officerId: 'getOfficerSlide'
    })
  },
  mounted() {
    console.log(this.$store.state.officerSlide);
  },
  async asyncData({ $axios }) {
    try {
      let officerList = await $axios.$get('/officers/');
      return { officerList };
    } catch (e) {
      return { officerList: [] };
    }
  },
  data() {
    return { officerList: [] };
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    background-color: $offBlack;
    display: flex;
    flex-direction: row;
  }

  .officer-gallery {
    width: 46.7vw;
  }

  .officer-bio-container {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    padding-left: 51px;
    position: relative;

    #slide-navigation {
      position: absolute;
      right: 78px;
      transform: translateY(-50%);
      top: 50%;
    }

  }


</style>