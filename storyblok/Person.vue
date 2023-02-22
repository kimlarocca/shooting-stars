<script setup>
defineProps({ blok: Object })
</script>
<template>
  <div v-editable="blok">
    <div class="person-blok">
      <div class="container">
        <h1>{{ blok.name }}</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person-blok {
  .container {
    container-type: inline-size;
    background-color: lightblue;
  }
}
@container (max-width: 1200px) {
  .person-blok {
    h1 {
      font-size: 1.25rem;
    }
  }
}
</style>
