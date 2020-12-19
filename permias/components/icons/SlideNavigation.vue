<template>
  <div class="slide-navigation-container">
    <div class="arrows next-arrow-up" @click="increment(); updateProgress('next')">
      <svg xmlns="http://www.w3.org/2000/svg" width="18.859" height="11.024" viewBox="0 0 18.859 11.024">
        <g id="DragNav" transform="translate(18.859) rotate(90)">
          <path id="Union_4" data-name="Union 4" d="M8.566,18.444.422,10.431a1.4,1.4,0,0,1,0-2L8.566.415a1.456,1.456,0,0,1,2.036,0,1.4,1.4,0,0,1,0,2L3.476,9.43,10.6,16.441a1.4,1.4,0,0,1,0,2,1.457,1.457,0,0,1-2.036,0Z" transform="translate(0)" fill="#fff"/>
        </g>
      </svg>
    </div>
    <p class="counter up-counter">{{ slideCount + 1 }}</p>
    <div class="officer-progress-bar">
      <div class="progress-shadow"></div>
      <div class="progress-move"></div>
    </div>
    <p class="counter total-counter">{{ maxOfficers }}</p>
    <div class="arrows prev-arrow-down" @click="decrement(); updateProgress('prev')">
      <svg xmlns="http://www.w3.org/2000/svg" width="18.859" height="11.024" viewBox="0 0 18.859 11.024">
        <g id="DragNav" transform="translate(18.859) rotate(90)">
          <path id="Union_4" data-name="Union 4" d="M8.566.415.422,8.427a1.4,1.4,0,0,0,0,2l8.144,8.013a1.456,1.456,0,0,0,2.036,0,1.4,1.4,0,0,0,0-2L3.476,9.429,10.6,2.418a1.4,1.4,0,0,0,0-2,1.457,1.457,0,0,0-2.036,0Z" transform="translate(11.024 18.859) rotate(180)" fill="#fff"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "SlideNavigation",
  props: ['officerId'],
  computed: {
    ...mapGetters ({
      slideCount: 'getOfficerSlide',
      maxOfficers: 'getMaxOfficers'
    })
  },
  methods: {
    ...mapMutations ({
      increment: 'incrementSlide',
      decrement: 'decrementSlide',
      updating: 'setUpdatingOfficer'
    }),
    updateProgress(direction) {
      let height = (100 / this.maxOfficers) * (this.slideCount + 1);
      $('.progress-move').css({height: height + '%'});
      this.updating(true);
    },
  },
  mounted() {
    // initialize height for progress bar;
    this.updateProgress();
  }
}
</script>

<style lang="scss" scoped>
  .slide-navigation-container {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;

    .arrows {
      cursor: pointer;
    }

    .counter {
      color: #fff;
      @include font-700("Montserrat");
      font-size: 32px;
      margin: 0;
      width: fit-content;
      height: auto;
    }
  }

  .officer-progress-bar {
    height: 200px;
    width: 7px;
    margin: 8px 0;
    position: relative;

    .progress-shadow {
      background-color: $shadow;
      width: 100%;
      height: 100%;
    }

    .progress-move {
      width: 100%;
      height: 50%;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      transition: height 400ms ease-in-out;
    }

  }
</style>