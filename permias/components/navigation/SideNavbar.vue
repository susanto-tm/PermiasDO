<template>
  <div class="container-sidebar-component">
    <div class="menu-items">
      <div class="options">
        <NuxtLink id="about-us" class="item" to="/about-us">About us</NuxtLink>
      </div>
      <div class="options">
        <NuxtLink id="officers" class="item" to="/officers">Officers</NuxtLink>
      </div>
      <div class="options">
        <NuxtLink id="gallery" class="item" to="/gallery">Gallery</NuxtLink>
      </div>
      <div class="options">
        <NuxtLink id="freshman-guide" class="item" to="freshman-guide">Freshman&#39;s Guide</NuxtLink>
      </div>
      <div class="options">
        <NuxtLink id="contact-us" class="item" to="/contact-us">Contact us</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavbar"
}
</script>

<style lang="scss" scoped>
  .container-sidebar-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .menu-items {
    display: flex;
    flex-direction: column;

    .options {
      margin: 0;
      padding: 15px 0;

      .item {
        text-decoration: none;
        color: transparent;
        @include font-700("Montserrat");
        -webkit-text-stroke: 0.5pt white;
        font-size: 22px;

        &.nuxt-link-active {
          color: #fff;
          -webkit-text-stroke: 0 white;
        }
      }
    }
  }
</style>