<template>
  <nav id="nav" class="navbar">
    <div class="nav-container">
      <div class="menu-items">
        <div class="option">
          <p class="item">
            <NuxtLink class="nav-link" to="/about-us">About Us</NuxtLink>
          </p>
        </div>
        <div class="option">
          <p class="item">
            <NuxtLink class="nav-link" to="/officers">Officers</NuxtLink>
          </p>
        </div>
        <div class="option">
          <p class="item">
            <NuxtLink class="nav-link" to="/gallery">Gallery</NuxtLink>
          </p>
        </div>
        <div class="option">
          <p class="item">
            <NuxtLink class="nav-link" to="/freshman-guide">Freshman&#39;s Guide</NuxtLink>
          </p>
        </div>
        <div class="option">
          <p class="item">
            <NuxtLink class="nav-link" to="/contact-us">Contact</NuxtLink>
          </p>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}

</script>

<style lang="scss" scoped>
  .navbar#nav {
    width: 100%;
    height:  88px;
    z-index: 99;

    .nav-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    .option {
      padding: 0 20px;

      .item {
        @include font-700("Montserrat");
        font-size: 18px;
        text-transform: uppercase;

        .nav-link {
          text-decoration: none;
          color: #fff;

          &.nuxt-link-active {
            border-bottom: 5px solid $blue-accent;
          }

        }
      }

    }
  }

</style>