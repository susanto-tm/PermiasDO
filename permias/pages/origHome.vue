<template>
  <div class="container" v-if="!isMobile">
    <NavbarHamburger />
    <section id="about"></section>
    <section id="gallery">
<!--        <Gallery :type="'officers'" :gallery="officerList" />-->
    </section>
    <section id="officers">
        <div class="officers-container">
          <div class="intro-officers">
            <div class="wrapper">
              <h1>Meet Our</h1>
              <h1>Executive Team</h1>
              <span></span>
            </div>
          </div>
          <OldGallery :type="'officers'" :gallery="officerList" />
<!--          <div class="officers-gallery" ref="officerProfiles">-->
<!--              <template v-for="officer in officerList">-->
<!--                  <Officer :key="officer.id" :officer="officer" />-->
<!--              </template>-->
<!--          </div>-->
        </div>
    </section>
    <section id="freshman-guide"></section>
    <section id="contact"></section>
  </div>
</template>

<script>
import NavbarHamburger from "@/components/NavbarHamburger";
import OldOfficer from "@/components/old-components/OldOfficer";
import OldGallery from "@/components/old-components/OldGallery";

export default {
    name: "origHome",
    components: {
      NavbarHamburger,
      OldOfficer,
      OldGallery
    },
    async asyncData({ $axios }) {
      try {
        let officerList = await $axios.$get('/officers/');
        let galleryList = await $axios.$get('/gallery/');
        return { officerList, galleryList };
      } catch(e) {
        return { officerList: [], galleryList: [] }
      }
    },
    data() {
      return {officerList: [], galleryList: [], isMobile: false }
    },
    mounted() {
        this.isMobile = window.innerWidth < 900;
        // this.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        // console.log("Ismobile " + this.isMobile + " " + window.innerWidth);
    }
  }
</script>

<style lang="scss">
  .container {
    width: 100%;
    min-height: 100vh;
    overflow: auto;
  }
  #officers {
      background-color: #000;

      .intro-officers {
          height: 15%;
          width: 100%;
          padding-top: 60px;

          .officers-container {
              height: 90%;
              width: 100%;
              display: flex;
              flex-direction: column;
          }

          .wrapper {
              padding: 0 50px;
              display: flex;
              flex-direction: column;
          }

          h1 {
              color: #fff;
              margin: 0;
              font-size: 60px;
              @include font-700("Lato");
          }

          span {
              background-color: #fff;
              height: 5px;
              width: 380px;
          }
      }

  }
  #about {
      background-color: #fff;
      height: 100vh;
  }
</style>