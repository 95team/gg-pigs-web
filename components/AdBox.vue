<template>
  <div class="text-center ma-1">
    <img :src="advert.src" :title="advert.title" :alt="advert.alt" :style="advert.type" />
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
      type: 'type',
      type1: {
        maxWidth: '300px',
        height: '250px',
      },
      type2: {
        width: '300px',
        height: '516px',
      },
      type3: {
        width: '300px',
        height: '782px',
      },
      type4: {
        width: '300px',
        height: '1048px',
      },
      type5: {
        width: '300px',
        height: '1314px',
      },
      type6: {
        width: '300px',
        height: '1580px',
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.advert.type === '1') this.type = this.type1;
      else if (this.advert.type === '2') this.type = this.type2;
      else if (this.advert.type === '3') this.type = this.type3;
      else if (this.advert.type === '4') this.type = this.type4;
      else if (this.advert.type === '5') this.type = this.type5;
      else if (this.advert.type === '6') this.type = this.type6;
      else this.type = this.type1;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto !important;
}
</style>
