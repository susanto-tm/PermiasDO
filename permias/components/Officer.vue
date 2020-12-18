<template>
  <div :class="['officer ' + officer.rank.substring(0, 4).toLowerCase()]">
    <div class="officer-container">
      <NuxtLink class="view-bio-link" @click.native="updateSlide" to="/officers/all-officers">
        <div class="officer-image-container">
          <h1 class="img" :style="{backgroundImage: 'url(' + officer.picture + ')'}"></h1>
        </div>
        <div class="view-bio-container">
          <h2 class="view-bio">View Bio</h2>
        </div>
      </NuxtLink>
    </div>
  </div>

</template>

<script>
export default {
  name: "Officer",
  props: ['officer'],
  methods: {
    updateSlide() {
      this.$store.commit('updateOfficerSlide', this.officer.id);
    }
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
  .officer {
    width: 573px;
    height: 645px;
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
    }
  }

  .view-bio-link {
    z-index: 99;
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
    cursor: pointer;

    .view-bio {
      text-decoration: none;
      -webkit-text-stroke: 1pt white;
      @include font-700("Montserrat");
      font-size: 58px;
      color: transparent;
      text-transform: uppercase;
    }

  }


</style>
