<template>
  <div class="text-center ma-1">
    <img
      :src="adBox.imagePath"
      :title="adBox.title"
      :alt="adBox.description"
      :class="adBox.posterType"
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
      adBox: {},
      emptyAdvertType1: {
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
      emptyAdvertType2: {
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
      emptyAdvertType3: {
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
        this.adBox = this.emptyAdvertType1;
        if (this.poster.size === '1') {
          this.adBox = this.emptyAdvertType1;
        } else if (this.poster.size === '2') {
          this.adBox = this.emptyAdvertType2;
        } else if (this.poster.size === '3') {
          this.adBox = this.emptyAdvertType3;
        }
      } else {
        this.adBox = this.poster;
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
