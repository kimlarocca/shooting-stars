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
        <i class="pi pi-times clickable" @click="visible = false" />
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
        <div class="custom-shape-divider-bottom-1682882926">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="details-bio">
          <div class="w800 m-auto">
            <h3 class="mb-5">{{ item.c[1].v }} {{ item.c[2].v }}</h3>
            <p v-if="item.c[3]?.v">Nickname: {{ item.c[3].v }}</p>
            <p v-if="item.c[4]?.v">Favorite Animal: {{ item.c[4].v }}</p>
            <p v-if="item.c[5]?.v">Favorite Color: {{ item.c[5].v }}</p>
            <p v-if="item.c[6]?.v">Favorite Subject: {{ item.c[6].v }}</p>
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

.pi-times {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 1.5rem;
}

.details-content {
  position: relative;
  max-width: 100%;
  margin: 50px auto 100px;
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
  color: #ffbb74;
}

.details .pi-star-fill.bottom {
  font-size: 150px;
  position: absolute;
  right: -110px;
  bottom: -30px;
  transform: rotate(10deg);
  color: #ffbb74;
}

.details-bio {
  background: white;
  padding: 3rem;
  color: #00152b;
}

.blue {
  color: #4bbec0;
}

.custom-shape-divider-bottom-1682882926 {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1682882926 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1682882926 .shape-fill {
  fill: #ffffff;
}
</style>
