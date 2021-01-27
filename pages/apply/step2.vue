<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="content">
      <v-row no-gutters align="center" class="mt128 mb32">
        <v-col cols="auto" class="fz32">광고 신청하기</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="fz13">
          <span class="mr16 text-light2">&#9312;시점/지점 선택</span>
          <span class="mr16 text-light2">···</span>
          <span class="mr16 text-primary2">&#9313;광고정보입력</span>
          <span class="mr16 text-light2">···</span>
          <span class="text-light2">&#9314;신청 완료</span>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="mt64 mb96 fz18 ">
        <v-row no-gutters align="center">
          <v-col cols="auto" class="mr32">
            <div class="addImg">
              <label for="imgFile">이미지 첨부</label>
              <input id="imgFile" type="file" accept="image/x-png,image/gif,image/jpeg" />
            </div>
          </v-col>
          <v-col cols="auto" class="text-light2">
            <v-row no-gutters align="center">
              <v-img :src="warning" max-height="22px" max-width="24px"></v-img>
              &nbsp;Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
            </v-row>
            <v-row no-gutters align="center">
              <v-img :src="warning" max-height="22px" max-width="24px"></v-img>
              &nbsp;Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet,
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters class="mt32 direction-column">
          <div class="mb16">제목</div>
          <v-text-field
            v-model="title"
            placeholder="제목을 입력하세요."
            :rules="[rules.titleLength]"
            counter="25"
            color="var(--primary2)"
            outlined
          ></v-text-field>
        </v-row>

        <v-row no-gutters class="mt16 direction-column">
          <div class="mb16">상세정보</div>
          <v-textarea
            v-model="description"
            height="204px"
            placeholder="상세 정보는 검색을 통해 광고가 노출되는데 중요한 역할을 합니다.
관련된 키워드나 문장을 자세히 써주세요."
            color="var(--primary2)"
            outlined
            hide-details
            auto-grow
          ></v-textarea>
        </v-row>

        <v-row no-gutters class="mt32 direction-column">
          <div class="mb16">태그</div>
          <v-text-field
            v-model="keywords"
            placeholder="키워드를 입력해주세요."
            color="var(--primary2)"
            outlined
            hide-details
          ></v-text-field>
        </v-row>

        <v-row no-gutters class="mt32 direction-column">
          <div class="mb16">랜딩 페이지 URL</div>
          <v-text-field
            v-model="siteUrl"
            placeholder="페이지 URL을 작성해주세요."
            :rules="[rules.urlValidation]"
            color="var(--primary2)"
            outlined
          ></v-text-field>
        </v-row>

        <v-row no-gutters class=" direction-column">
          <div class="mb16">이메일</div>
          <v-row no-gutters>
            <v-col class="mr16">
              <v-text-field
                v-model="userEmail"
                placeholder="이메일을 입력해주세요."
                :rules="[rules.emailValidation]"
                color="var(--primary2)"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="auto">
              <input class="verifyEmail" type="button" value="인증메일 전송" />
            </v-col>
          </v-row>
          <v-row no-gutters align="center">
            <v-col cols="4" class="mr16">
              <v-text-field
                placeholder="인증코드를 입력해주세요."
                color="var(--primary2)"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="auto">
              <input class="verifyEmail" type="button" value="인증코드 확인" />
            </v-col>
          </v-row>
        </v-row>

        <v-row no-gutters class="mt32 direction-column">
          <div class="mb16">비밀번호</div>
          <v-row no-gutters>
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="isShowing ? 'text' : 'password'"
              :append-icon="isShowing ? 'mdi-eye' : 'mdi-eye-off'"
              placeholder="비밀번호를 입력해주세요."
              hint="최소 8자 이상 입력해주세요."
              color="var(--primary2)"
              outlined
              @click:append="isShowing = !isShowing"
            ></v-text-field>
          </v-row>
          <v-row no-gutters>
            <v-text-field
              :rules="[rules.required, rules.checkPassword]"
              :type="isShowing ? 'text' : 'password'"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              color="var(--primary2)"
              outlined
            ></v-text-field>
          </v-row>
        </v-row>

        <v-row no-gutters class="mt32 direction-column">
          <v-checkbox
            label="내용 수정은 불가능합니다."
            color="var(--primary2)"
            hide-details
          ></v-checkbox>
          <v-checkbox
            label="이메일, 비밀번호는 수정이 불가능합니다."
            color="var(--primary2)"
            hide-details
          ></v-checkbox>
          <v-checkbox label="" color="var(--primary2)" hide-details></v-checkbox>
        </v-row>
      </div>
    </div>

    <v-row no-gutters class="mb128">
      <v-btn
        block
        depressed
        color="var(--primary1)"
        height="176px"
        style="font-size: 52px; color: var(--light5)"
        :ripple="false"
        to="step1"
      >
        신청하기
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'owner/default',
  data() {
    return {
      warning: require('~/static/icon/warning.svg'),
      title: '',
      description: '',
      keywords: '',
      siteUrl: '',
      userEmail: '',
      isShowing: false,
      password: '',
      rules: {
        titleLength: value => value.length <= 25 || '25자 이내로 작성해주세요.',
        emailValidation: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || '이메일 형식이 맞지 않습니다.';
        },
        urlValidation: value => {
          const pattern = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
          return pattern.test(value) || 'URL 형식이 맞지 않습니다.';
        },
        required: value => !!value || '비밀번호를 입력해주세요.',
        min: value => value.length >= 8 || '최소 8자 이상 입력해주세요.',
        checkPassword: value => {
          if (value !== this.password) return '비밀번호가 일치하지 않습니다.';
          else return '';
        },
      },
    };
  },
};
</script>

<style scoped>
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.content {
  margin: 0 18.3%;
}
.addImg input[type='file'] {
  width: 0;
}
.addImg label {
  font-size: 18px;
  border: solid 1px var(--light2);
  border-radius: 14px;
  background-color: #fafbfc;
  padding: 22px 26px;
  cursor: pointer;
}
.direction-column {
  flex-direction: column;
}
.v-text-field {
  border-radius: 0;
}
.verifyEmail {
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 62px;
  border: solid 1px var(--light2);
  border-radius: 14px;
  background-color: #fafbfc;
  font-size: 18px;
}
</style>
