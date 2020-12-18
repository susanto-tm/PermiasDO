<template>
  <div class="container-default-text">
    <h2 class="default-text-header">{{ header }}</h2>
    <p class="default-text-details">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "DefaultText",
  props: ['header', 'text']
}
</script>

<style lang="scss" scoped>
  .container-default-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    .default-text-header {
      color: #fff;
      @include font-700("Lato");
      font-size: 50px;
      border-bottom: 7px solid $blue-accent;
      text-transform: uppercase;
      margin: 0 0 15px;
    }

    .default-text-details {
      color: #fff;
      @include font-400("Lato");
      line-height: 35px;
      font-size: 24px;
      max-width: 60%;
      text-align: center;
    }

  }

</style>