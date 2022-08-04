<template>
  <div
    class="poster-container"
    @mouseover="MOUSEOVER_EMPTY_POSTER"
    @mouseout="MOUSEOUT_EMPTY_POSTER"
    @click="isClicked = !isClicked"
  >
    <div>
      <img
        :src="
          posterBox.imagePath
            ? posterBox.imagePath
            : isLight
            ? lightEmptyPosterImage
            : darkEmptyPosterImage
        "
        :alt="posterBox.description"
      />
    </div>

    <div
      v-if="posterBox.siteUrl !== 'apply'"
      class="detail-container"
      :class="{ 'detail-container-click': isClicked }"
    >
      <div class="detail-background"></div>
      <div class="poster-detail">
        <div class="poster-title">
          {{ posterBox.title }}
        </div>
        <div class="poster-link">
          <a :href="posterBox.siteUrl" target="_blank">
            <img :src="btnSiteUrl" :alt="posterBox.title" class="link-button" />
          </a>
        </div>
      </div>
    </div>
    <nuxt-link v-else :to="posterBox.siteUrl">
      <!-- <div v-else style="cursor: pointer;" @click="TOGGLE_APPLICATION"> -->
      <div class="empty-poster-link"></div>
      <!-- </div> -->
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

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
        imagePath: '',
        siteUrl: 'apply',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R1', 'example-image'],
        posterWidth: '240',
        posterHeight: '200',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      isClicked: false,
      lightEmptyPosterImage: '',
      darkEmptyPosterImage: '',
    };
  },
  computed: {
    ...mapGetters([
      'lightEmptyPoster',
      'lightEmptyPosterHover',
      'darkEmptyPoster',
      'darkEmptyPosterHover',
      'btnSiteUrl',
    ]),
    isLight() {
      return this.$colorMode.preference === 'light';
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.poster.type !== undefined && this.poster.type === 'EXAMPLE') {
        this.posterBox = this.emptyPoster;
        this.lightEmptyPosterImage = this.lightEmptyPoster;
        this.darkEmptyPosterImage = this.darkEmptyPoster;
      } else {
        this.posterBox = this.poster;
      }
    },
    MOUSEOVER_EMPTY_POSTER() {
      if (this.isLight) {
        this.lightEmptyPosterImage = this.lightEmptyPosterHover;
      } else {
        this.darkEmptyPosterImage = this.darkEmptyPosterHover;
      }
    },
    MOUSEOUT_EMPTY_POSTER() {
      if (this.isLight) {
        this.lightEmptyPosterImage = this.lightEmptyPoster;
      } else {
        this.darkEmptyPosterImage = this.darkEmptyPoster;
      }
    },
    ...mapMutations('apply', ['TOGGLE_APPLICATION']),
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  display: block;
}

.poster-container {
  position: relative;

  margin: 0 6px 12px;
}
.detail-container {
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  display: none;
}
.detail-background {
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}
.poster-detail {
  position: absolute;
  bottom: 0;
  right: 0;

  text-align: right;

  width: 100%;
}
.poster-title {
  color: var(--grey-0);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
.poster-link {
  display: flex;

  justify-content: flex-end;
}
.empty-poster-link {
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
}

@media all and (min-width: 1264px) {
  .poster-container:hover .detail-container {
    display: block;
  }
  .poster-detail {
    padding: 16px;
  }
  .poster-title {
    font-size: 18px;
    line-height: 20px;

    margin-bottom: 12px;
  }
}
@media all and (max-width: 1263px) {
  .detail-container-click {
    display: block;
  }
  .poster-detail {
    padding: 8px;
  }
  .poster-title {
    font-size: 14px;
    line-height: 18px;

    padding: 0 8px;
  }
  .link-button {
    padding: 8px;
  }
}
@media all and (max-width: 599px) {
  .poster-detail {
    padding: 0;
  }
  .poster-title {
    display: none;
  }
}
</style>
