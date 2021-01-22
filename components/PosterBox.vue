<template>
  <!-- Poster -->
  <div class="poster ma-1" :style="{ 'z-index': zIndex }" @click="isClicked = !isClicked">
    <!-- Poster 이미지 -->
    <img
      class="poster-image"
      :src="posterBox.imagePath"
      :title="posterBox.title"
      :alt="posterBox.description"
      :class="[posterBox.posterType, { 'poster-image-animation': isClicked }]"
      :style="{
        width: posterBox.posterWidth + 'px !important',
        height: posterBox.posterHeight + 'px !important',
      }"
    />

    <!-- Poster 콘텐츠 -->
    <v-card
      elevation="0"
      class="poster-detail"
      :class="{ 'poster-detail-animation': isClicked }"
      :style="{
        width: posterBox.posterWidth + 'px !important',
        height: posterBox.posterHeight + 'px !important',
      }"
    >
      <v-card-text style="height:100%">
        <div
          class="bottom-content poster-detail-title"
          style="height:30%"
          :style="{ color: color }"
        >
          {{ posterBox.title }}
        </div>
        <div
          class="center-content poster-detail-description"
          style="height:30%"
          :style="{ color: color }"
        >
          {{ posterBox.description }}
        </div>
        <div class="bottom-content poster-detail-link" style="height:40%">
          <v-btn
            target="_blank"
            :href="posterBox.siteUrl"
            block
            plain
            outlined
            :style="{ color: color }"
          >
            자세히 보기
          </v-btn>
        </div>
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
      emptyPosterType1: {
        id: 0,
        title: '광고를 신청해주세요!',
        description: '광고를 신청해주세요!',
        keywords: '광고를 신청해주세요!',
        imagePath: 'image/empty_type1.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R1', 'example-image'],
        posterWidth: '300',
        posterHeight: '250',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      emptyPosterType2: {
        id: 0,
        title: '광고를 신청해주세요!',
        description: '광고를 신청해주세요!',
        keywords: '광고를 신청해주세요!',
        imagePath: 'image/empty_type2.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R2', 'example-image'],
        posterWidth: '300',
        posterHeight: '516',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      emptyPosterType3: {
        id: 0,
        title: '광고를 신청해주세요!',
        description: '광고를 신청해주세요!',
        keywords: '광고를 신청해주세요!',
        imagePath: 'image/empty_type3.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R3', 'example-image'],
        posterWidth: '300',
        posterHeight: '782',
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
        this.posterBox = this.emptyPosterType1;
        if (this.poster.size === '1') {
          this.posterBox = this.emptyPosterType1;
        } else if (this.poster.size === '2') {
          this.posterBox = this.emptyPosterType2;
        } else if (this.poster.size === '3') {
          this.posterBox = this.emptyPosterType3;
        }
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
  height: auto !important;
}

.example-image {
  opacity: 0.1;
}

.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-content {
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
  background-color: transparent;
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
