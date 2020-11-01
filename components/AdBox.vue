<template>
  <div class="text-center ma-1">
    <img
      :src="adBox.imagePath"
      :title="adBox.title"
      :alt="adBox.detailDescription"
      :class="adBox.advertisementType"
    />
  </div>
</template>

<script>
export default {
  props: {
    advert: {
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
        detailDescription: '광고를 신청해주세요!',
        imagePath: 'image/empty_type1.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        advertisementType: ['R1', 'example-image'],
        advertisementWidth: '300',
        advertisementHeight: '250',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      emptyAdvertType2: {
        id: 0,
        title: '광고를 신청해주세요!',
        detailDescription: '광고를 신청해주세요!',
        imagePath: 'image/empty_type2.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        advertisementType: ['R2', 'example-image'],
        advertisementWidth: '300',
        advertisementHeight: '516',
        startedDate: '2020-01-01',
        finishedDate: '2030-01-01',
      },
      emptyAdvertType3: {
        id: 0,
        title: '광고를 신청해주세요!',
        detailDescription: '광고를 신청해주세요!',
        imagePath: 'image/empty_type3.png',
        siteUrl: 'www.example.com',
        rowPosition: '-',
        columnPosition: '-',
        advertisementType: ['R3', 'example-image'],
        advertisementWidth: '300',
        advertisementHeight: '782',
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
      if (this.advert.type !== undefined && this.advert.type === 'EXAMPLE') {
        this.adBox = this.emptyAdvertType1;
        if (this.advert.size === '1') {
          this.adBox = this.emptyAdvertType1;
        } else if (this.advert.size === '2') {
          this.adBox = this.emptyAdvertType2;
        } else if (this.advert.size === '3') {
          this.adBox = this.emptyAdvertType3;
        }
      } else {
        this.adBox = this.advert;
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
