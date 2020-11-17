<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="content">
      <!-- 진행상황 -->
      <v-row no-gutters align="center" style="margin: 129px 0 96px 0; font-size: 20px;">
        <div style="font-size: 52px;">
          광고 신청하기
        </div>
        <v-spacer></v-spacer>
        <span>&#9312; 시점/지점 선택</span>
        <span style="margin: 0 var(--spacing-md)">···</span>
        <span class="text-primary3">&#9313; 광고정보입력</span>
        <span style="margin: 0 var(--spacing-md)">···</span>
        <span>&#9314; 신청 완료</span>
      </v-row>

      <!-- 컨텐츠 -->
      <v-row class="category" no-gutters align="center" style="height: 80px;">
        <v-col md="2">
          <div class="imgFileAdd">
            <label for="imgFile">이미지 첨부</label>
            <input id="imgFile" type="file" accept="image/x-png,image/gif,image/jpeg" />
          </div>
        </v-col>

        <v-col class="text-light2" style="font-size: 20px;">
          <v-row no-gutters align="center">
            <v-img :src="warning" class="warningIcon"></v-img>
            <div style="margin-left: 23px;">
              Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
            </div>
          </v-row>
          <v-row no-gutters align="center">
            <v-img :src="warning" class="warningIcon"></v-img>
            <div style="margin-left: 23px;">
              Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
            </div>
          </v-row>
        </v-col>
      </v-row>

      <div class="category">
        <div class="categoryTitle">
          제목
        </div>
        <v-row no-gutters>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            counter="25"
            placeholder="제목을 입력하세요."
            outlined
          ></v-text-field>
        </v-row>
      </div>

      <div class="category">
        <div class="categoryTitle">
          상제 정보
        </div>
        <v-row no-gutters>
          <v-textarea
            v-model="detailDescription"
            height="204px"
            placeholder="상세 정보는 검색을 통해 광고가 노출되는데 중요한 역할을 합니다.
관련된 키워드나 문장을 자세히 써주세요."
            outlined
            hide-details
            auto-grow
          ></v-textarea>
        </v-row>
      </div>

      <div class="category">
        <div class="categoryTitle">
          태그
        </div>
        <v-row no-gutters>
          <v-text-field v-model="tag" placeholder="" outlined hide-details></v-text-field>
        </v-row>
      </div>

      <div class="category">
        <div class="categoryTitle">
          랜딩 페이지 URL
        </div>
        <v-row no-gutters>
          <v-text-field v-model="siteUrl" placeholder="" outlined hide-details></v-text-field>
        </v-row>
      </div>

      <div class="category">
        <div class="categoryTitle">
          이메일
        </div>
        <v-row no-gutters align="center" style="margin-bottom: var(--spacing-md)">
          <v-text-field
            v-model="certifiedEmail"
            placeholder=""
            outlined
            hide-details
          ></v-text-field>
          <input class="emailBtn" type="button" value="인증메일 전송" />
        </v-row>
        <v-row no-gutters align="center">
          <v-col md="3">
            <v-text-field
              v-model="certifiedCode"
              placeholder="인증코드를 입력해주세요."
              outlined
              hide-details
            ></v-text-field>
          </v-col>
          <input class="emailBtn" type="button" value="인증코드 확인" />
        </v-row>
      </div>

      <div class="category">
        <div class="categoryTitle">
          비밀번호
        </div>
        <v-row no-gutters style="margin-bottom: var(--spacing-md)">
          <v-text-field
            v-model="password"
            placeholder="비밀번호를 입력해주세요."
            outlined
            hide-details
          ></v-text-field>
        </v-row>
        <v-row no-gutters>
          <v-text-field
            v-model="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            outlined
            hide-details
          ></v-text-field>
        </v-row>
      </div>

      <div class="text-light2" style="font-size: 20px;">
        <v-row no-gutters>
          <label class="checkArea">
            <input type="checkbox" name="" value="" />
            <i class="checkIcon"></i>
            Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
          </label>
        </v-row>
        <v-row no-gutters>
          <label class="checkArea">
            <input type="checkbox" name="" value="" />
            <i class="checkIcon"></i>
            Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
          </label>
        </v-row>
        <v-row no-gutters>
          <label class="checkArea">
            <input type="checkbox" name="" value="" />
            <i class="checkIcon"></i>
            Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
          </label>
        </v-row>
      </div>
    </div>

    <!-- 신청하기 -->
    <v-row no-gutters style="margin: 96px 0 128px 0;">
      <nuxt-link to="/ownerApply1">
        <v-img :src="apply"></v-img>
      </nuxt-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'ownerDefault',
  data() {
    return {
      warning: require('~/static/icon/warning.svg'),
      apply: require('~/static/icon/apply.svg'),
      title: [],
      titleRules: [v => v.length <= 25 || '최대 25자까지 가능합니다.'],
      detailDescription: [],
      tag: [],
      siteUrl: [],
      certifiedEmail: [],
      certifiedCode: [],
      password: [],
    };
  },
};
</script>

<style scoped>
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.imgFileAdd input[type='file'] {
  width: 0;
}
.imgFileAdd label {
  font-size: 24px;
  border: solid 1px var(--light2);
  border-radius: 14px;
  background-color: #fafbfc;
  padding: 22px 26px;
  cursor: pointer;
}
.checkArea {
  cursor: pointer;
}
.checkArea input[type='checkbox'] {
  display: none;
}
.checkArea .checkIcon {
  display: inline-block;
  width: 29px;
  height: 29px;
  background: url(~static/icon/unCheckedBox.svg) left center no-repeat;
  text-align: center;
  vertical-align: middle;
  margin: 4px 16px 4px 0;
}
.checkArea input[type='checkbox']:checked + .checkIcon {
  background-image: url(~static/icon/checkedBox.svg);
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
}
.content {
  margin: 0 18.3%;
}
.category {
  margin-bottom: var(--spacing-xl);
}
.categoryTitle {
  margin-bottom: var(--spacing-md);
  font-size: 24px;
}
.warningIcon {
  position: absolute;
  width: 17px;
  height: 15px;
}
.emailBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 72px;
  border: solid 1px var(--light2);
  border-radius: 14px;
  background-color: #fafbfc;
  margin-left: 12px;
  font-size: 20px;
}
</style>
