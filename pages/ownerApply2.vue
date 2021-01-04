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
          상세 정보
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
            v-model="verifiedEmail"
            placeholder="이메일을 입력해주세요."
            outlined
            hide-details
          ></v-text-field>
          <input
            class="emailBtn"
            type="button"
            value="인증메일 전송"
            @click="requestVerificationMail"
          />
        </v-row>
        <v-row no-gutters align="center">
          <v-col md="3">
            <v-text-field
              v-model="verifiedCode"
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
      <!-- <nuxt-link to="/ownerApply1">
        <v-img :src="apply"></v-img>
      </nuxt-link> -->
      <button @click="submitForm">
        <v-img :src="apply"></v-img>
      </button>
    </v-row>

    <v-snackbar
      v-model="isShowingUpSnackBar"
      :color="colorOfSnackBar"
      :timeout="3000"
      :value="true"
      text
      top
    >
      <div class="text-center">{{ messageOnSnackBar }}</div>
    </v-snackbar>

    <v-dialog v-model="isShowingUpProgressBar" width="400">
      <v-card color="blue-grey lighten-1" dark>
        <v-card-text class="font-weight-bold text-center pt-3">
          {{ messageOnProgressBar }}
          <v-progress-linear indeterminate color="white" class="mt-3 mb-1"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';
import { baseApiUrl } from '../api/index.js';
import { requestVerificationMail } from '~/api/verificationMail';

export default {
  name: 'OwnerApply2',
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
      password: [],
      verifiedEmail: [],
      verifiedCode: [],
      isVerifiedEmail: false,
      isShowingUpSnackBar: false,
      isShowingUpProgressBar: false,
      messageOnSnackBar: null,
      messageOnProgressBar: null,
      colorOfSnackBar: 'success',
    };
  },
  methods: {
    submitForm() {
      axios({
        method: 'post',
        url: '/api/v1/poster-requests',
        baseURL: `${baseApiUrl}`,
        data: {
          userEmail: this.certifiedEmail,
          title: this.title,
          detailDescription: this.detailDescription,
          posterType: this.$route.query.posterType,
          posterWidth: this.$route.query.posterWidth,
          posterHeight: this.$route.query.posterHeight,
          imagePath: 'http://hj2server.ddns.net:8383/images/type2.png',
          siteUrl: this.siteUrl,
          rowPosition: '5',
          columnPosition: '14',
          startedDate: this.$route.query.date,
          finishedDate: this.$route.query.finishedDate,
        },
      });
    },
    requestVerificationMail() {
      const vm = this;
      const payload = {
        receiver: this.verifiedEmail,
      };

      this.isShowingUpProgressBar = true;
      this.messageOnProgressBar = '인증 메일을 발송 중 입니다.';

      requestVerificationMail(payload)
        .then(response => {
          if (
            response.data.data.status === true &&
            response.data.data.receiver === vm.verifiedEmail
          ) {
            vm.verificationCode = response.data.data.verificationCode;

            vm.colorOfSnackBar = 'success';
            vm.isShowingUpSnackBar = true;
            vm.isShowingUpProgressBar = false;

            vm.messageOnProgressBar = null;
            vm.messageOnSnackBar = '인증 메일 발송에 성공했습니다.';
          } else {
            throw new Error('인증 메일 발송에 실패했습니다.');
          }
        })
        .catch(error => {
          if (error.message) console.log(error.message);

          vm.colorOfSnackBar = 'error';
          vm.isShowingUpSnackBar = true;
          vm.isShowingUpProgressBar = false;

          vm.messageOnProgressBar = null;
          vm.messageOnSnackBar = '인증 메일 발송에 실패했습니다.';
        });
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center !important;
}
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
