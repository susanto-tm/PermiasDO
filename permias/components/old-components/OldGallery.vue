<template>
    <section class="gallery-view">
        <div class="gallery-slide">
          <div v-if="type === 'officers'">
            <div class="officers-gallery" ref="officerProfiles">
              <template v-for="officer in gallery">
                <!-- TODO change template for officer lists -->
                <OldOfficer :key="officer.id" :officer="officer" />
              </template>
              </div>
          </div>
<!--          <div v-else-if="type === 'gallery'"></div>-->
<!--          <div class="galleryEvent">-->
<!--            <img v-for="eventImage in items.images" :src="'http://localhost:8000' + eventImage.image"/>-->
<!--          </div>-->
        </div>
    </section>
</template>

<script>
import OldOfficer from "@/components/old-components/OldOfficer";
    export default {
      name: "OldGallery",
      props: ["type", "gallery"],
      components: {
        OldOfficer
      },
      mounted() {
        $('.galleryEvent').flickity({
          fullscreen:true,
          imagesLoaded:true,
          draggable:true,
          pageDots: false,
          prevNextButtons: false
        });
        let officersGallery = $(this.$refs["officerProfiles"]);
        officersGallery.flickity({
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
            prevNextButtons: false,
        });

      }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
    .officers-gallery {
          padding-top: 60px;
      }
</style>