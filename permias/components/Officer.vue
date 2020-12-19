<template>
  <div class="officer" :class="mode === 'officerBio' ? 'bio' : 'overview'">
    <div class="officer-container">
        <div class="officer-image-container">
          <h1 class="img" :style="{backgroundImage: 'url(' + officer.picture + ')'}"></h1>
        </div>
        <div class="view-bio-container" v-if="mode === 'overview'">
          <NuxtLink to="/officers/all-officers" @click.native="updateSlide(officer.id - 1)" class="view-bio">View Bio</NuxtLink>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "Officer",
  props: ['mode', 'officer'],
  methods: {
    ...mapMutations ({
      updateSlide: 'setOfficerSlide'
    })
  },
  mounted() {
    $('.view-bio-container').hover(function() {
      $(this).stop().fadeTo('fast', 1);
    }, function() {
      $(this).stop().fadeTo('fast', 0);
    });
  }
}
</script>

<style lang="scss" scoped>
  .officer.overview {
    width: 573px;
    height: 645px;
    margin-right: 20px;
  }
  .officer.bio {
    width: auto;
    height: 100vh;
  }

  .officer-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .officer-image-container {
    width: 100%;
    height: 100%;

    h1.img {
      height: 100%;
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0;
    }
  }

  .view-bio-link {
    width: 100%;
    height: 100%;
  }

  .view-bio-container {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 200ms ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .view-bio {
      text-decoration: none;
      -webkit-text-stroke: 1.5pt white;
      @include font-700("Montserrat");
      font-size: 58px;
      color: transparent;
      text-transform: uppercase;
      cursor: pointer;
    }

  }


</style>
