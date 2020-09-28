<template>
  <v-container fluid pa-0 class="text">
    <!-- 진행상황 -->
    <v-layout class="content process" align-center>
      <v-flex>
        <div class="text52">광고 신청하기</div>
      </v-flex>
      <v-flex d-flex justify-end>
        <span class="text20 text-primary3">&#9312; 시점/지점 선택</span>
        <span class="margin16">···</span>
        <span class="text20">&#9313; 광고정보입력</span>
        <span class="margin16">···</span>
        <span class="text20">&#9314; 신청 완료</span>
      </v-flex>
    </v-layout>

    <!-- 컨텐츠 -->
    <v-layout class="content">
      <v-flex class="leftContent">
        <div class="text24">광고 크기</div>
        <v-card class="text20 adSize" width="520px" height="183px">
          <input id="size1" type="checkbox" name="1x1" />
          <label for="size1">1x1 (300*250)</label><br />
          <input id="size2" type="checkbox" name="1x2" />
          <label for="size2">1x2 (300*250)</label><br />
          <input id="size3" type="checkbox" name="1x3" />
          <label for="size3">1x3 (300*250)</label><br />
        </v-card>
        <div class="text24">게시 기간</div>
      </v-flex>
      <v-flex>
        <div class="text24">광고 위치</div>
        <v-card class="text20 adPosition" width="624px" height="610px">
          광고의 크기와 게시기간을 선택해주세요.
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 다음 -->
    <v-layout>
      <v-btn href="/ownerApply2" block text>
        <v-img :src="nextStep"></v-img>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'ownerDefault',
  data() {
    return {
      nextStep: require('~/static/icon/nextStep.svg'),
    };
  },
};
</script>

<style scoped>
.content {
  margin-left: 352px;
  margin-right: 352px;
}
.process {
  margin-top: 129px;
  margin-bottom: 96px;
}
.v-btn {
  height: 176px !important;
  padding: 0px !important;
  margin-bottom: 128px;
}
.text {
  font-family: 'Noto Sans KR', sans-serif;
}
.text52 {
  font-size: 52px;
}
.text20 {
  font-size: 20px;
}
.text24 {
  font-size: 24px;
}
.margin16 {
  margin-left: 16px;
  margin-right: 16px;
}
.adSize {
  padding: 32px 59px;
  margin-top: 16px;
  margin-bottom: 32px;
}
input[type='checkbox'] {
  transform: scale(2);
  margin-right: 16px;
}
#size2 {
  margin: 16px 16px 16px 0;
}
.adPosition {
  padding: 290px 144px;
  margin-top: 16px;
  margin-bottom: 168px;
}
.leftContent {
  margin-right: 72px;
}
</style>
