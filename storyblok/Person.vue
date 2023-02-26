<script setup>
import sbImage from 'primevue-designer/components/sb-image.vue'
import VFlexibleLink from 'primevue-designer/components/VFlexibleLink.vue'
//defineProps({ blok: Object })
const props = defineProps({
  blok: {
    type: Object,
    default: null,
  },
})
const blurb = computed(() => renderRichText(props.blok.blurb))
</script>
<template>
  <div v-editable="blok">
    <pre>{{ props.blok }}</pre>
    <div class="person-blok">
      <div class="container">
        <div class="flex gap-1">
          <div class="col-4">
            <sb-image :src="blok.photo" />
          </div>
          <div class="col-8 flex flex-column">
            <p class="name">{{ blok.name }}</p>
            <p class="title">{{ blok.title }}</p>
            <div class="blurb" v-html="blurb"></div>
            <v-flexible-link :to="`tel:${blok.phone}`">
              <p>{{ blok.phone }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="`mailto:${blok.email.email}`"
              :target="blok.email.target"
            >
              <p>{{ blok.email.email }}</p>
            </v-flexible-link>
            <v-flexible-link :to="`http://maps.google.com/?q=${blok.address}`">
              <p>{{ blok.address }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="blok.website.url"
              :target="blok.website.target"
            >
              <p>{{ blok.website.url }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="blok.linkedin.url"
              :target="blok.linkedin.target"
            >
              <p>{{ blok.linkedin.url }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="blok.twitter.url"
              :target="blok.twitter.target"
            >
              <p>{{ blok.twitter.url }}</p>
            </v-flexible-link>
          </div>
        </div>
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
@container (max-width: 768px) {
  .person-blok {
    h1 {
      color: red;
      font-size: 1.25rem;
    }
  }
}
</style>
