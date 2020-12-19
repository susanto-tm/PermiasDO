<template>
  <div class="gallery-container">
    <div class="draggable-gallery-container" v-if="setting === 'overview'">
      <template v-if="mode === 'officers'" v-for="item in gallery">
        <Officer :key="item.id" :officer="item" :mode="setting"/>
      </template>
    </div>
    <div class="static-gallery-container" v-else>
      <template v-if="mode === 'officers'" v-for="item in gallery">
        <Officer :key="item.id" :officer="item" :mode="setting" />
      </template>
    </div>
    <div class="drag-hint-container" v-if="setting === 'overview'">
      <svg id="DragNav" xmlns="http://www.w3.org/2000/svg" width="13.067" height="23.151" viewBox="0 0 13.067 23.151">
        <path id="Union_4" data-name="Union 4" d="M10.153,22.641.5,12.805a1.763,1.763,0,0,1,0-2.459L10.153.509a1.684,1.684,0,0,1,2.414,0,1.763,1.763,0,0,1,0,2.459L4.12,11.576l8.447,8.607a1.763,1.763,0,0,1,0,2.459,1.684,1.684,0,0,1-2.414,0Z" transform="translate(0 0)" fill="#fff"/>
      </svg>
     <p class="drag-hint">Drag</p>
      <svg id="DragNav" xmlns="http://www.w3.org/2000/svg" width="13.067" height="23.151" viewBox="0 0 13.067 23.151">
        <path id="Union_4" data-name="Union 4" d="M10.153.509.5,10.345A1.763,1.763,0,0,0,.5,12.8l9.654,9.837a1.684,1.684,0,0,0,2.414,0,1.763,1.763,0,0,0,0-2.459L4.12,11.575l8.447-8.607a1.763,1.763,0,0,0,0-2.459,1.684,1.684,0,0,0-2.414,0Z" transform="translate(13.067 23.151) rotate(180)" fill="#fff"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Officer from "@/components/Officer";

export default {
  name: "Gallery",
  props: ['mode', 'setting', 'gallery'],
  components: {
    Officer
  },
  computed: {
    ...mapGetters ({
      currentSlide: 'getOfficerSlide',
      updatingOfficer: 'getUpdatingOfficer'
    })
  },
  methods: {
    ...mapMutations({
      updating: 'setUpdatingOfficer'
    }),
    updateSlide() {
      $('.static-gallery-container').slick('slickGoTo', this.currentSlide);
    }
  },
  mounted() {
    $(".draggable-gallery-container").flickity({
      freeScroll: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false
    });

    let staticGallery = $('.static-gallery-container');

    staticGallery.slick({
      infinite: true,
      slidesToShow: 1,
      dots: false,
      arrows: false,
      draggable: false
    });

    staticGallery.slick('slickGoTo', this.currentSlide);
  },
  watch: {
    '$store.state.updatingOfficer': function(newOfficer, oldOfficer) {
      console.log("updating");
      if (this.updatingOfficer) {
        this.updateSlide();
        this.updating(false);
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .gallery-container {
    width: 100%;
    height: 100%;
  }

  .drag-hint-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .drag-hint {
      margin: 0 20px;
      @include font-700("Montserrat");
      font-size: 24px;
      -webkit-text-stroke: 0.5pt white;
      text-transform: uppercase;
      color: transparent;
    }

  }

</style>