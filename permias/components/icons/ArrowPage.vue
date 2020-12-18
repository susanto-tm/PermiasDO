<template>
  <div v-if="direction === 'left'">
    <div class="arrow-container">
      <NuxtLink class="arrow" :to="'/' + toLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24.621" viewBox="0 0 32 24.621">
          <g id="PageArrow" transform="translate(0 0)">
            <path id="Union_2" data-name="Union 2" d="M10.093,23.771.844,14.345a2.9,2.9,0,0,1-.57-.828,2.863,2.863,0,0,1,0-2.447,2.9,2.9,0,0,1,.57-.828,2.864,2.864,0,0,1,.492-.4L10.175.83A2.741,2.741,0,0,1,14.1.83a2.87,2.87,0,0,1,0,4.005l-4.515,4.6H29.143a2.857,2.857,0,0,1,0,5.713H9.688l4.433,4.517a2.942,2.942,0,0,1,0,4.1,2.809,2.809,0,0,1-4.028,0Z" transform="translate(0 0)" fill="#fff"/>
          </g>
        </svg>
      </NuxtLink>
      <p class="subtext right-subtext">{{ subtext }}</p>
    </div>
  </div>
  <div v-else-if="direction === 'right'">
    <div class="arrow-container">
        <p class="subtext left-subtext">{{ subtext }}</p>
        <NuxtLink class="arrow" :to="'/' + toLink">
          <svg id="PageArrow" xmlns="http://www.w3.org/2000/svg" width="32" height="24.621" viewBox="0 0 32 24.621">
            <path id="Union_2" data-name="Union 2" d="M10.175,23.792l-8.84-9.01a2.866,2.866,0,0,1-.492-.4,2.9,2.9,0,0,1-.57-.828,2.863,2.863,0,0,1,0-2.447,2.9,2.9,0,0,1,.57-.828L10.093.851a2.809,2.809,0,0,1,4.028,0,2.942,2.942,0,0,1,0,4.1L9.688,9.472H29.143a2.857,2.857,0,1,1,0,5.713H9.589l4.515,4.6a2.87,2.87,0,0,1,0,4,2.741,2.741,0,0,1-3.929,0Z" transform="translate(32 24.621) rotate(180)" fill="#fff"/>
          </svg>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
  name: "LeftPage",
  props: ['direction', 'subtext', 'toLink'],
  mounted() {
    let subtext = $('.subtext');
    $(".arrow").hover(function() {
      $(this).parent().find(subtext).fadeTo('fast', 1);
    }, function() {
      $(this).parent().find(subtext).fadeTo('fast', 0);
    });
  }
}
</script>

<style lang="scss" scoped>
  .arrow-container {
    display: flex;
    flex-direction: row;

    .subtext {
      color: #fff;
      text-transform: uppercase;
      @include font-700("Montserrat");
      opacity: 0;

      &.left-subtext {
        margin: 3px 20px 0 0;
      }

      &.right-subtext {
        margin: 3px 0 0 20px;
      }

    }
  }

</style>