<template>
  <v-container fill-height fluid pa-0>
    <v-row justify="center" style="height:70%">
      <v-col cols="12" align="center">
        <span class="notoSansFont text-light2">
          포스터(광고) 등록을 위해서는 아래 메일로 신청해주세요. : )
          <br /><br />
          {{ email }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'main/default',
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
    }),
  },
  data() {
    return {
      email: 'pigs95team@gmail.com',
    };
  },
};
</script>

<style scoped>
.content {
  margin: 0 29.2%;
}
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
}
@media all and (max-width: 959px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 960px) and (max-width: 1263px) {
  .container {
    max-width: 932px !important;
  }
}
@media all and (min-width: 1264px) {
  .container {
    max-width: 1880px !important;
  }
}
</style>
