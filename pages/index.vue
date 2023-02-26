<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
  <!-- <pre>{{ story }}</pre> -->
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div class="grid mt-5">
    <div class="box col-6">
      <div class="container">
        <div class="root flex">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
        </div>
      </div>
    </div>
    <div class="box col-3">2</div>
    <div class="box col-3">3</div>
  </div>
</template>

<style lang="scss">
.grid {
  justify-content: space-around;
  .box {
    background-color: tan;
  }
  .container {
    container-type: inline-size;
  }
  .root {
    gap: 1rem;
    justify-content: space-between;
    .box {
      background-color: lightblue;
    }
  }
}
@container (max-width: 400px) {
  .root {
    gap: 3rem;
    font-size: 2.25rem;
  }
}
</style>
