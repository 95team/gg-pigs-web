<template>
  <v-container fluid pa-0 class="text">
    <!-- 진행상황 -->
    <v-layout class="content process" align-center>
      <v-flex>
        <div class="text52">광고 신청하기</div>
      </v-flex>
      <v-flex class="text-light2" d-flex justify-end>
        <span class="text20">&#9312; 시점/지점 선택</span>
        <span class="margin16">···</span>
        <span class="text20 text-primary3">&#9313; 광고정보입력</span>
        <span class="margin16">···</span>
        <span class="text20">&#9314; 신청 완료</span>
      </v-flex>
    </v-layout>

    <!-- 컨텐츠 -->
    <v-layout class="content">
      <v-flex md2>
        <div class="imgFileAdd">
          <!-- <v-btn class="imageBtn">이미지 첨부</v-btn> -->
          <label for="imgFile">이미지 첨부</label>
          <input id="imgFile" type="file" />
        </div>
      </v-flex>
      <v-flex>
        <div class="text20 text-light2 height80">
          <v-img :src="warning" class="warningIcon"></v-img>
          <div>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,</div>
          <v-img :src="warning" class="warningIcon"></v-img>
          <div>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,</div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout class="content">
      <v-flex>
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
        <div class="text20 text-light2">
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
      <v-btn class="applyBtn" block text>
        <nuxt-link to="/ownerApply1">
          <v-img :src="apply"></v-img>
        </nuxt-link>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'ownerDefault',
  data() {
    return {
      apply: require('~/static/icon/apply.svg'),
      warning: require('~/static/icon/warning.svg'),
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1920px;
}
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
.imgFileAdd {
  margin: 22px 0 86px 0;
}
.margin34 {
  margin-bottom: 34px;
}
.v-textarea {
  margin-top: 16px;
}
input[type='checkbox'] {
  /* transform: scale(2); */
  margin-right: 29px;
}
#check2 {
  margin: 16px 29px 16px 0;
}
.imgFileAdd input[type='file'] {
  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.imgFileAdd label {
  font-size: 24px;
  vertical-align: middle;
  background-color: #fafbfc;
  cursor: pointer;
  border: solid 1px var(--light2);
  border-radius: 14px;
  padding: 22px 26px;
}
.warningIcon {
  width: 17px;
  height: 15px;
  float: left;
  margin-top: 7.5px;
  margin-right: 7.7px;
}
.height80 {
  height: 80px;
  padding-top: 10px;
}
</style>
