<template>
  <div class="text-center ma-1">
    <img
      :src="posterBox.imagePath"
      :title="posterBox.title"
      :alt="posterBox.description"
      :class="posterBox.posterType"
    />
  </div>
</template>

<script>
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
    };
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
</style>
