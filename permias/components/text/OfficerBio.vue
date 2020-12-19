<template>
    <div class="bio-container">
      <h1 class="rank">{{ officer.rank }}</h1>
      <h1 class="name">{{ officer.first_name}} <span class="last-name">{{ officer.last_name }}</span></h1>
      <p class="bio-stmt">{{ officer.profile }}</p>
    </div>
</template>

<script>
export default {
  name: "OfficerBio",
  props: ['officer']
}
</script>

<style lang="scss" scoped>
  .bio-container {
    max-width: 497px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .rank {
      color: #fff;
      @include font-700("Montserrat");
      font-size: 28px;
      text-transform: uppercase;
      background-color: $blue-accent;
      width: fit-content;
      height: auto;
      padding: 10px 20px;
      text-align: center;
      margin: 0;
    }

    .name {
      color: #fff;
      @include font-700("Montserrat");
      font-size: 49px;
      text-transform: uppercase;
      line-height: 55px;
      margin: 15px 0;

      span.last-name {
        color: transparent;
        -webkit-text-stroke: 1.5pt white;
      }
    }

    .bio-stmt {
      color: #fff;
      @include font-400("Lato");
      font-size: 20px;
      margin: 0;
      max-width: 455px;
    }
  }

</style>