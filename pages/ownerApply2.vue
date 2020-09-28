<template>
  <v-container fluid pa-0 class="text">
    <!-- 진행상황 -->
    <v-layout class="content process" align-center>
      <v-flex>
        <div class="text52">광고 신청하기</div>
      </v-flex>
      <v-flex d-flex justify-end>
        <span class="text20">&#9312; 시점/지점 선택</span>
        <span class="margin16">···</span>
        <span class="text20 text-primary3">&#9313; 광고정보입력</span>
        <span class="margin16">···</span>
        <span class="text20">&#9314; 신청 완료</span>
      </v-flex>
    </v-layout>

    <!-- 컨텐츠 -->
    <v-layout class="content">
      <v-flex>
        <div class="margin64">
          <v-btn class="imageBtn">이미지 첨부</v-btn>
        </div>
        <div class="margin34 text24">
          <div>제목</div>
          <v-textarea auto-grow outlined rows="1" row-height="62px"></v-textarea>
        </div>
        <div class="margin34 text24">
          <div>상제 정보</div>
          <v-textarea
            auto-grow
            outlined
            rows="1"
            row-height="194px"
            placeholder="상세 정보는 검색을 통해 광고가 노출되는데 중요한 역할을 합니다.
관련된 키워드나 문장을 자세히 써주세요."
          ></v-textarea>
        </div>
        <div class="margin34 text24">
          <div>태그</div>
          <v-textarea auto-grow outlined rows="1" row-height="62px"></v-textarea>
        </div>
        <div class="margin34 text24">
          <div>랜딩 페이지 URL</div>
          <v-textarea auto-grow outlined rows="1" row-height="62px"></v-textarea>
        </div>
        <div class="text20 text-greyish">
          <input id="check1" type="checkbox" name="check1" />
          <label for="check1"
            >Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,</label
          ><br />
          <input id="check2" type="checkbox" name="check2" />
          <label for="check2"
            >Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,</label
          ><br />
          <input id="check3" type="checkbox" name="check3" />
          <label for="check3"
            >Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,</label
          >
        </div>
      </v-flex>
    </v-layout>

    <!-- 신청하기 -->
    <v-layout>
      <v-btn href="/ownerApply1" class="applyBtn" block text>
        <v-img :src="apply"></v-img>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'ownerDefault',
  data() {
    return {
      apply: require('~/static/icon/nextStep.svg'),
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
.text {
  font-family: 'Noto Sans KR', sans-serif;
}
.text52 {
  font-size: 52px;
}
.text24 {
  font-size: 24px;
}
.text20 {
  font-size: 20px;
}
.imageBtn {
  font-size: 24px;
  width: 168px !important;
  height: 80px !important;
  padding: 0px !important;
}
.margin16 {
  margin-left: 16px;
  margin-right: 16px;
}
.applyBtn {
  height: 176px !important;
  padding: 0px !important;
  margin-top: 96px;
  margin-bottom: 128px;
}
.margin64 {
  margin-bottom: 64px;
}
.margin34 {
  margin-bottom: 34px;
}
.v-textarea {
  margin-top: 16px;
}
input[type='checkbox'] {
  transform: scale(2);
  margin-right: 29px;
}
#check2 {
  margin: 16px 29px 16px 0;
}
</style>
