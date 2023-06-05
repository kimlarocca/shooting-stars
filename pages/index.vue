<template>
  <div v-if="sheetData" class="home grid">
    <MasonryWall
      :items="sheetData"
      :column-width="320"
      :ssr-columns="1"
      :gap="0"
      class="w-full m-auto"
    >
      <template #default="{ item, index }">
        <div v-if="index === 0" class="title">
          <h1><span>MTES</span><span>Shooting</span><span>Stars</span></h1>
        </div>
        <v-star :item="item" :index="index" />
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
const sheetData = ref(null)
const sheetId = '1Q7uLWJv9Sdb6d5kyFjWTT9Z9reXf8RESU-pTR7f1tvQ'
const sheetNumber = '0'
const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=${sheetNumber}`

// get the sheet data from the google sheet
fetch(sheetUrl)
  .then((response) => response.text())
  .then((data) => {
    // format the sheet data
    let json_string = data.substring(47).slice(0, -2)
    let formattedData = JSON.parse(json_string)
    sheetData.value = formattedData.table.rows
    // randomly sort the sheetData array
    sheetData.value.sort(() => Math.random() - 0.5)
  })
</script>

<style lang="scss">
.home {
  color: white;
}
.masonry-wall {
  overflow: hidden;
}
.title {
  text-align: center;
  padding: 20px 20px 40px;
  span {
    display: block;
    margin-bottom: -15px;
    &:nth-child(2) {
      font-size: 1.6rem;
      margin-bottom: -20px;
    }
    &:nth-child(3) {
      font-size: 2.5rem;
    }
  }
}
</style>
