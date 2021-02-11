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
    <v-container
      class="poster-detail"
      style="max-width:100%"
      :class="{ 'poster-detail-animation': isClicked }"
      :style="{
        width: posterBox.posterWidth + 'px !important',
        height: '100%',
      }"
    >
      <!-- Display: desktop, tablet, laptop -->
      <v-row class="poster-detail-title" style="height:20%" :style="{ color: color }">
        {{ posterBox.title }}
      </v-row>
      <v-row class="poster-detail-description" style="height:70%" :style="{ color: color }">
        {{ posterBox.description }}
      </v-row>
      <v-row class="poster-detail-link" style="height:auto">
        <v-btn
          v-if="isClicked"
          block
          outlined
          target="_blank"
          :href="posterBox.siteUrl"
          :style="{ color: color }"
        >
          자세히 보기
        </v-btn>
      </v-row>

      <!-- Display: mobile -->
      <v-row class="poster-detail-link-mobile">
        <v-btn
          v-if="isClicked"
          target="_blank"
          :href="posterBox.siteUrl"
          block
          outlined
          x-small
          :style="{ color: color }"
        >
          자세히 보기
        </v-btn>
      </v-row>
    </v-container>
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
  padding: 16px;

  font: normal bold normal 20px NotoSansCJKkr;

  align-items: flex-end !important;
  justify-content: center !important;
}

.poster-detail-description {
  padding: 16px;
  font: normal normal normal 14px NotoSansCJKkr;

  text-align: center;

  align-items: center !important;
  justify-content: center !important;
}

.poster-detail-link {
  padding: 0px 16px;
  font: normal normal normal 14px NotoSansCJKkr;

  align-items: center !important;
  justify-content: center !important;
}

.poster-detail-link-mobile {
  display: none;

  padding: 0px 16px;
  font: normal normal normal 10px NotoSansCJKkr;

  align-items: center !important;
  justify-content: center !important;
}

@media all and (max-width: 600px) {
  .poster-detail-title {
    display: none;
  }
  .poster-detail-description {
    display: none;
  }
  .poster-detail-link {
    display: none;
  }
  .poster-detail-link-mobile {
    display: flex;

    margin-top: 0;

    height: 100%;
  }
}
</style>
