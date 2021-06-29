<template>
  <!-- Poster -->
  <div class="poster" @click="isClicked = !isClicked">
    <div v-if="posterBox.imagePath !== ''">
      <img
        :src="posterBox.imagePath"
        :title="posterBox.title"
        :alt="posterBox.description"
        :style="{
          width: posterBox.posterWidth + 'px !important',
          height: '100%',
        }"
      />

      <!-- Poster 콘텐츠 -->
      <!-- Display: desktop, tablet, laptop -->
      <v-container
        class="poster-cover"
        style="max-width: 100%; height: 100%"
        :class="{ 'poster-cover-animation': isClicked }"
      ></v-container>

      <v-container
        class="poster-detail"
        style="max-width: 100%; height: 100%"
        :class="{ 'poster-detail-animation': isClicked }"
      >
        <v-row no-gutters class="poster-detail-title" style="max-width: 85%; color: var(--grey-0)">
          {{ posterBox.title }}
        </v-row>
        <v-row no-gutters class="poster-detail-link">
          <v-btn
            class="link-btn"
            :class="{ 'link-btn-animation': isClicked }"
            height="40px"
            min-width="40px"
            target="_blank"
            :href="posterBox.siteUrl"
          >
            <v-img :src="ownerWebsiteLink"></v-img>
          </v-btn>
        </v-row>
      </v-container>
    </div>

    <div v-else>
      <nuxt-link to="/apply">
        <img
          class="poster-empty-default"
          :src="emptyPosterBoxDefault"
          :title="posterBox.title"
          :alt="posterBox.description"
          :style="{
            width: posterBox.posterWidth + 'px !important',
            height: '100%',
          }"
        />
        <img
          class="poster-empty-hover"
          :src="emptyPosterBoxHover"
          :title="posterBox.title"
          :alt="posterBox.description"
          :style="{
            width: posterBox.posterWidth + 'px !important',
            height: '100%',
          }"
        />
      </nuxt-link>
    </div>
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
        imagePath: '',
        siteUrl: '/',
        rowPosition: '-',
        columnPosition: '-',
        posterType: ['R1', 'example-image'],
        posterWidth: '240',
        posterHeight: '200',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      isClicked: false,
      emptyPosterBoxDefault: '',
      emptyPosterBoxHover: '',
    };
  },
  computed: {
    ...mapGetters([
      'dayMode',
      'ownerWebsiteLink',
      'emptyPosterDefault',
      'emptyPosterHover',
      'emptyPosterDefaultDark',
      'emptyPosterHoverDark',
    ]),
  },
  watch: {
    dayMode() {
      if (this.dayMode) {
        this.emptyPosterBoxDefault = this.emptyPosterDefault;
        this.emptyPosterBoxHover = this.emptyPosterHover;
      } else {
        this.emptyPosterBoxDefault = this.emptyPosterDefaultDark;
        this.emptyPosterBoxHover = this.emptyPosterHoverDark;
      }
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
        if (this.dayMode) {
          this.emptyPosterBoxDefault = this.emptyPosterDefault;
          this.emptyPosterBoxHover = this.emptyPosterHover;
        } else {
          this.emptyPosterBoxDefault = this.emptyPosterDefaultDark;
          this.emptyPosterBoxHover = this.emptyPosterHoverDark;
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
  display: block;
}

.v-btn {
  padding: 0 !important;
}

.poster {
  position: relative;
  margin: 0 6px 12px 6px;
}

.poster-empty-hover {
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
}

.poster-cover {
  position: absolute;
  top: 0;
}

.poster-detail {
  opacity: 0;

  position: absolute;
  top: 0;
}

.poster-detail-title {
  position: absolute;
  right: 16px;
  bottom: 68px;

  font: normal bold normal 20px NotoSansCJKkr;
  text-align: right;
}

.poster-detail-link {
  position: absolute;
  right: 16px;
  bottom: 16px;
}

@media all and (min-width: 1264px) {
  .poster:hover .poster-empty-default {
    opacity: 0;
  }
  .poster:hover .poster-empty-hover {
    opacity: 1;
  }

  .poster:hover .poster-cover {
    background-color: black;
    animation: fadeout 50ms;
    animation-fill-mode: forwards;
  }

  .poster:hover .poster-detail {
    opacity: 1;
  }
}

@media all and (max-width: 1263px) {
  .poster-cover-animation {
    background-color: black;
    animation: fadeout 50ms;
    animation-fill-mode: forwards;
  }

  .poster-detail-animation {
    opacity: 1;
  }

  .link-btn {
    display: none;
  }

  .link-btn-animation {
    display: inline;
  }
}

@media all and (max-width: 599px) {
  .poster-detail-title {
    display: none;
  }

  .poster-detail-link {
    right: 8px;
    bottom: 8px;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.4;
  }
}
</style>
