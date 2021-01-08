<template>
  <v-container fluid class="notoSansFont mt128 mb128">
    <div class="content">
      <v-row no-gutters class="mb96">
        <span style="font-size: 52px;">광고 조회하기</span>
      </v-row>

      <v-row no-gutters>
        <v-text-field
          v-model="email"
          :rules="[
            rules.emailRequire,
            rules.emailMinLength,
            rules.emailMaxLength,
            rules.emailPattern,
          ]"
          placeholder="이메일을 입력해주세요."
          outlined
        />
      </v-row>
      <v-row no-gutters>
        <v-text-field
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          outlined
        />
      </v-row>

      <v-divider class="mt64 mb64"></v-divider>

      <div align="center">
        <v-btn
          color="var(--primary2)"
          elevation="1"
          outlined
          style="width: 384px; height:72px;"
          @click="login"
          >조회하기</v-btn
        >
      </div>
    </div>
    <v-snackbar
      v-model="snackBarShowingUp"
      :color="snackBarColor"
      :timeout="3000"
      :value="true"
      text
      centered
    >
      <div class="text-center">{{ snackBarMessage }}</div>
    </v-snackbar>
  </v-container>
</template>

<script>
import { loginApi } from '~/api/login';
import { getLoginUser } from '~/api/user';

export default {
  layout: 'ownerDefault',
  data() {
    return {
      email: '',
      password: '',
      snackBarColor: 'success',
      snackBarMessage: '',
      snackBarShowingUp: false,
      minLengthOfEmail: 4,
      maxLengthOfEmail: 64,
      rules: {
        emailRequire: value => !!value || '이메일을 입력해주세요.',
        emailMaxLength: value =>
          value.length <= this.maxLengthOfEmail || '최대 입력 가능한 글자를 초과했습니다.',
        emailMinLength: value =>
          value.length >= this.minLengthOfEmail || '최소 4글자 이상 입력해주세요.',
        emailPattern: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || '올바른 이메일을 입력해주세요.';
        },
      },
    };
  },
  created() {},
  methods: {
    login() {
      const vm = this;
      const payload = {
        email: this.email,
        password: this.password,
      };
      loginApi(payload)
        .then(response => {
          vm.loginSuccess();
        })
        .catch(() => {
          vm.loginFailure();
        });
    },
    loginSuccess() {
      const vm = this;
      const admin = 'ROLE_ADMIN';
      getLoginUser()
        .then(response => {
          if (response.data.data.role === admin) {
            vm.$router.push({ name: 'admin-lists' });
          } else {
            vm.$router.push({ name: 'owner' });
          }
        })
        .catch(() => {
          vm.loginFailure();
        });
    },
    loginFailure() {
      const vm = this;
      vm.snackBarColor = 'error';
      vm.snackBarShowingUp = true;
      vm.snackBarMessage = '로그인에 실패했습니다.';
    },
  },
};
</script>

<style scoped>
.content {
  margin: 0 29.2%;
}
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
