<template>
  <div>
    <div
      v-if="item.c[item.c.length - 1].v"
      :style="{ width: `${sizes[index]}px` }"
      class="star clickable"
      :class="{ 'mt-4': index === 0, 'mt-6': index === 2, 'mt-3': index === 4 }"
      @click="visible = true"
    >
      <img
        :src="item.c[item.c.length - 1].v"
        :alt="`${item.c[1].v} ${item.c[2].v}`"
      />
    </div>
    <div
      v-else
      :style="{ height: '300px', width: '300px' }"
      class="star clickable"
      @click="visible = true"
    >
      <div class="blank">
        <p>{{ item.c[1].v }}<br />{{ item.c[2].v[0] }}</p>
        <img src="/images/blank.png" :alt="`${item.c[1].v} ${item.c[2].v}`" />
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="visible" class="details">
        <div class="details-close clickable">
          <h1 @click="visible = false">x</h1>
        </div>
        <div class="details-content w800">
          <h2>2023</h2>
          <img
            v-if="item.c[item.c.length - 1].v"
            :src="item.c[item.c.length - 1].v"
            :alt="`${item.c[1].v} ${item.c[2].v}`"
          />
          <i class="pi pi-star-fill top" />
          <i class="pi pi-star-fill bottom" />
          <!-- <div class="star top pi pi-spin">
            <img src="/images/blank.png" />
          </div>
          <div class="star bottom">
            <img src="/images/blank.png" />
          </div> -->
        </div>
        <div class="details-bio">
          <div class="w800 m-auto">
            <h3 class="mb-4">{{ item.c[1].v }} {{ item.c[2].v }}</h3>
            <p v-if="item.c[3]?.v">Nickname: {{ item.c[3].v }}</p>
            <p v-if="item.c[4]?.v">Favorite Animal: {{ item.c[4].v }}</p>
            <p v-if="item.c[5]?.v">Favorite Color: {{ item.c[5].v }}</p>
            <p v-if="item.c[6]?.v">
              Favorite School Subject: {{ item.c[6].v }}
            </p>
            <p v-if="item.c[7]?.v">Favorite Hobby: {{ item.c[7].v }}</p>
            <p v-if="item.c[8]?.v">
              What do you want to be when you grow up? {{ item.c[8].v }}
            </p>
            <p v-if="item.c[9]?.v">
              What are you most excited about for middle school?
              {{ item.c[9].v }}
            </p>
            <div v-if="item.c[10]?.v">
              <Divider class="my-5" />
              <p>{{ item.c[10].v }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  index: {
    type: Number,
    default: null,
  },
  item: {
    type: Object,
    default: null,
  },
})

const visible = ref(false)

// an array of sizes for the masonry wall
// populate it with 150 different numbers between 300 and 500
const sizes = Array.from({ length: 150 }, () =>
  Math.floor(Math.random() * (320 - 175) + 175)
)
</script>

<style lang="scss">
.star {
  margin: auto;
  &:hover {
    transform: scale(1.1);
  }
}

.star img {
  max-width: 100%;
  height: auto;
  clip-path: polygon(
    50% 0%,
    65% 28%,
    98% 35%,
    78% 58%,
    79% 91%,
    50% 77%,
    21% 91%,
    22% 58%,
    2% 35%,
    34% 28%
  );
}

.star .blank {
  position: relative;

  p {
    z-index: 10;
    position: absolute;
    color: rgb(0, 21, 43);
    font-family: 'Audiowide', sans-serif;
    text-transform: uppercase;
    font-size: 2.5rem;
    line-height: 2.5rem;
    top: 110px;
    width: 100%;
    margin: auto;
    text-align: center;
  }
}

.details {
  z-index: 100;
  position: fixed;
  background: rgb(0 21 43 / 83%);
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.details-close {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.details-content {
  position: relative;
  max-width: 100%;
  margin: 50px auto 120px;
}

.details h2 {
  background: #4bbec0;
  width: fit-content;
  padding: 8px 16px;
  margin: 0 0 -22px 30px;
  transform: rotate(-5deg);
}

.details img {
  border: solid 16px white;
  transform: rotate(-5deg);
  width: 100%;
}

.details .pi-star-fill.top {
  font-size: 100px;
  position: absolute;
  top: 40px;
  left: -80px;
  transform: rotate(-20deg);
}

.details .pi-star-fill.bottom {
  font-size: 150px;
  position: absolute;
  right: -110px;
  bottom: -30px;
  transform: rotate(10deg);
}

.details-bio {
  background: white;
  padding: 3rem;
  color: #00152b;
}

.blue {
  color: #4bbec0;
}
</style>
