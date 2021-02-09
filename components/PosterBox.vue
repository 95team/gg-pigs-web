<template>
  <!-- Poster -->
  <div class="poster ma-2" :style="{ 'z-index': zIndex }" @click="isClicked = !isClicked">
    <!-- Poster 이미지 -->
    <img
      class="poster-image"
      :src="posterBox.imagePath"
      :title="posterBox.title"
      :alt="posterBox.description"
      :class="[posterBox.posterType, { 'poster-image-animation': isClicked }]"
      :style="{
        width: posterBox.posterWidth + 'px !important',
        height: '100%',
      }"
    />

    <!-- Poster 콘텐츠 -->
    <v-card
      elevation="0"
      class="poster-detail"
      :class="{ 'poster-detail-animation': isClicked }"
      :style="{
        width: posterBox.posterWidth + 'px !important',
        height: '100%',
      }"
    >
      <v-card-text style="height:100%">
        <v-row
          class="poster-detail-title pa-4"
          align="center"
          justify="center"
          style="height:20%"
          :style="{ color: color }"
        >
          {{ posterBox.title }}
        </v-row>
        <v-row
          class="poster-detail-description pa-4"
          align="center"
          style="height:70%"
          :style="{ color: color }"
        >
          {{ posterBox.description }}
        </v-row>
        <v-row class="poster-detail-link pa-4">
          <v-btn
            v-if="isClicked"
            target="_blank"
            :href="posterBox.siteUrl"
            block
            outlined
            :style="{ color: color }"
          >
            자세히 보기
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    poster: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      posterBox: {},
      emptyPoster: {
        id: 0,
        title: '광고를 신청해주세요!',
        description: '광고를 신청해주세요!',
        keywords: '광고를 신청해주세요!',
        imagePath: 'image/empty-poster.png',
        siteUrl: '/',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R1', 'example-image'],
        posterWidth: '300',
        posterHeight: '250',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      zIndex: 0,
      isClicked: false,
    };
  },
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
    }),
    color() {
      return this.dayMode === true ? 'black' : 'white';
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {
      if (this.poster.type !== undefined && this.poster.type === 'EXAMPLE') {
        this.posterBox = this.emptyPoster;
      } else {
        this.posterBox = this.poster;
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}

.example-image {
  opacity: 0.7;
}

.poster {
  position: relative;
}

.poster:hover {
  cursor: pointer;
}

.poster-imgae {
  opacity: 1;
}

.poster-image-animation {
  filter: blur(8px);
  opacity: 0.25;
  transition: filter 1.5s;
}

.poster-detail {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.poster-detail-animation {
  background-color: transparent !important;
  opacity: 1;
  transition: opacity 1.5s;
}

.poster-detail-title {
  font: normal bold normal 20px NotoSansCJKkr;
}

.poster-detail-description {
  font: normal normal normal 14px NotoSansCJKkr;

  text-align: center;
}

.poster-detail-link {
  font: normal normal normal 14px NotoSansCJKkr;
}
</style>
