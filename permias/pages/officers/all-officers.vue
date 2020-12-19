<template>
  <div class="container">
    <div class="officer-gallery">
      <Gallery mode="officers" setting="officerBio" :gallery="officerList" />
    </div>
    <div class="officer-bio-container">
      <NuxtLink to="/officers" class="back-link">Back</NuxtLink>
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
  methods: {
    enterBio() {
      gsap.fromTo($('.officer-details'), {css: {opacity: 0}}, {css: {opacity: 1}, duration: 1.1, ease: 'power1.in'})
    },
    leaveBio() {
      gsap.fromTo($('.officer-details'), {css: {opacity: 1}}, {css: {opacity: 0}, duration: 1, ease: 'power1.out'})
    }
  },
  mounted() {
    this.enterBio();
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
  },
  watch: {
    '$store.state.updatingOfficer': function (newUpdate, oldUpdate) {
      this.leaveBio();
      this.enterBio();
    }
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

    .back-link {
      position: absolute;
      top: 26px;
      right: 35px;
      text-decoration: none;
      color: transparent;
      -webkit-text-stroke: 1pt white;
      @include font-700("Montserrat");
      font-size: 30px;
    }

    #slide-navigation {
      position: absolute;
      right: 78px;
      transform: translateY(-50%);
      top: 50%;
    }

  }

</style>