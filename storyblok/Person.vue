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

const getIcon = (link) => {
  const str = String(link.title)
  if (str !== 'My website') {
    return str.toLowerCase()
  } else {
    return 'link'
  }
}
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
            <div class="flex">
              <v-flexible-link
                :to="`tel:${blok.phone}`"
                raw
                :aria-label="blok.phone"
              >
                <Button
                  aria-hidden="true"
                  icon="pi pi-phone"
                  v-tooltip.top="blok.phone"
                  class="p-button-rounded p-button-text"
                />
              </v-flexible-link>
              <v-flexible-link
                :to="`tel:${blok.email.url}`"
                raw
                :aria-label="blok.email.url"
              >
                <Button
                  aria-hidden="true"
                  icon="pi pi-envelope"
                  v-tooltip.top="blok.email.url"
                  class="p-button-rounded p-button-text"
                />
              </v-flexible-link>
              <template v-for="linkBlok in props.blok">
                <v-flexible-link
                  v-if="linkBlok.linktype === 'url'"
                  :to="`tel:${linkBlok.url}`"
                  raw
                  :key="linkBlok.title"
                  :aria-label="linkBlok.title"
                >
                  <Button
                    aria-hidden="true"
                    :icon="`pi pi-${getIcon(linkBlok)}`"
                    v-tooltip.top="linkBlok.title"
                    class="p-button-rounded p-button-text"
                  />
                </v-flexible-link>
              </template>
            </div>
            <!-- <v-flexible-link
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
            <v-flexible-link
              :to="blok.instagram.url"
              :target="blok.instagram.target"
            >
              <p>{{ blok.instagram.url }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="blok.facebook.url"
              :target="blok.facebook.target"
            >
              <p>{{ blok.facebook.url }}</p>
            </v-flexible-link>
            <v-flexible-link
              :to="blok.discord.url"
              :target="blok.discord.target"
            >
              <p>{{ blok.discord.url }}</p>
            </v-flexible-link>
            <v-flexible-link :to="blok.github.url" :target="blok.github.target">
              <p>{{ blok.github.url }}</p>
            </v-flexible-link>
            <v-flexible-link :to="blok.paypal.url" :target="blok.paypal.target">
              <p>{{ blok.paypal.url }}</p>
            </v-flexible-link> -->
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
