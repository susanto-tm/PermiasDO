<template>
  <div class="container">
    <Navbar />
    <section id="about"></section>
    <section id="gallery">
        <Gallery :gallery="galleryList" />
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
            <div class="officers-gallery" ref="officerProfiles">
                <template v-for="officer in officerList">
                    <Officer :key="officer.id" :officer="officer" />
                </template>
            </div>
        </div>
    </section>
    <section id="freshman-guide"></section>
    <section id="contact"></section>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Officers from "@/components/Officers"
  import Officer from "@/components/Officer";
  import Gallery from "@/components/Gallery";

  export default {
    components: {
      Navbar,
      Officer,
      Gallery
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
      return {officerList: [], galleryList: [] }
    },
    mounted() {
        let officersGallery = $(this.$refs["officerProfiles"]);
        officersGallery.flickity({
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
            prevNextButtons: false,
        })
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

      .officers-gallery {
          padding-top: 60px;
      }

  }
  #about {
      background-color: #fff;
      height: 100vh;
  }
</style>

