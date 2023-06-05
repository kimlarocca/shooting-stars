<template>
  <div class="page" :class="route.name">
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
        <Meta name="msapplication-TileColor" content="#ffffff" />
        <Meta name="theme-color" content="#ffffff" />
        <Title>MTES Shooting Stars!</Title>
      </Head>
    </Html>
    <main class="p-2">
      <slot />
    </main>
    <div class="stars"></div>
    <div class="twinkling"></div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style lang="scss">
.stars,
.twinkling {
  position: fixed;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.stars {
  z-index: -1;
  background: #00152b url('/images/stars.png') repeat top center;
}

.twinkling {
  z-index: -1;
  background: transparent url('/images/twinkling.png') repeat top center;
  animation: move-twink-back 400s linear infinite;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
</style>
