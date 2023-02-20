<script setup>
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import menuDataImport from '~/utilities/menuData_static.js'
import { getMenuData } from '~/utilities/menuData.js'
const config = useRuntimeConfig()
const route = useRoute()
const darkMode = ref(false)
const menuData = ref(menuDataImport)
const globalMenuData = useMenuData()
globalMenuData.value = await getMenuData()
</script>

<template>
  <div
    class="page"
    :class="[`${route.name}`]"
    :data-style-mode="darkMode ? 'dark' : 'default'"
  >
    <Html lang="en">
      <Head>
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <Meta name="msapplication-TileColor" content="#ffffff" />
        <Meta name="theme-color" content="#ffffff" />

        <Link
          rel="canonical"
          :href="`https://dtssecurityllc.com${route.path}`"
        />
        <Title>Diversified Technology Service, LLC</Title>
        <Meta name="description" content="Security Description to come." />
        <Meta name="keywords" content="Security keywords to come." />
        <Meta
          name="og:site_name"
          content="Diversified Technology Service, LLC"
        />
        <Meta name="og:type" content="website" />
        <Meta
          name="og:url"
          :content="`https://www.dtssecurityllc.com${route.fullPath}`"
        />
        <Meta name="og:title" content="Diversified Technology Service, LLC" />
        <Meta name="og:description" content="Investigating a strange world." />
        <Meta name="og:image" content="/og-default-image.png" />
        <Meta
          name="og:image:alt"
          content="Diversified Technology Service, LLC"
        />
        <Meta name="og:image:width" content="1200" />
        <Meta name="og:image:height" content="600" />
        <!--  <Meta name="fb:app_id" content="151261804904925" /> -->
        <!--         <Meta
          name="fb:pages"
          content="224921207956535"
          data-detail="WNYC Studios"
        /> -->
        <!-- <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:site" content="@radiolab" />
        <Meta
          name="twitter:title"
          content="Diversified Technology Service, LLC"
        />
        <Meta
          name="twitter:description"
          content="Investigating a strange world."
        />
        <Meta name="twitter:image" content="/og-default-image.png" />
        <Meta
          name="apple-itunes-app"
          content="app-id=152249110, affiliate-data=at=1010lSme&amp;ct=radiolab"
        /> -->
      </Head>
    </Html>
    <Menubar :model="menuData">
      <template #start>
        <nuxt-link to="/" class="logo-holder-link">
          <img src="/images/dts_alone_2022.svg" alt="dts logo" />
        </nuxt-link>
      </template>
    </Menubar>

    <main>
      <slot />
    </main>
    footer
  </div>
</template>

<style lang="scss" scoped>
.p-menubar {
  border-radius: 0;
  padding: 0.5rem;
  .logo-holder-link {
    img {
      width: 120px;
      position: relative;
      display: block;
      margin-right: 0.5rem;
    }
  }
}
</style>
