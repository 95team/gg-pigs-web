<template>
  <div v-if="isShowSignUp" class="inner">
    <v-card flat>
      <v-form>
        <v-container>
          <v-row justify="end">
            <v-btn text plain :ripple="false" @click="TOGGLE_SIGNUP">
              <span class="material-icons">
                close
              </span>
            </v-btn>
          </v-row>
          <v-card-title>회원가입</v-card-title>
          <v-row no-gutters>
            <v-col cols="12">
              <div class="label">이메일</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="label">비밀번호</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="label">비밀번호 재확인</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="9">
              <div class="label">인증번호</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="3">
              <div class="certification-wrapper">
                <v-btn color="primary" :ripple="false" height="64px">인증번호 받기</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <div class="btn-wrapper">
            <v-btn color="primary" elevation="1" height="64px" block :ripple="false">
              가입하기
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SignUp',
  computed: {
    ...mapState('sign', ['isShowSignUp']),
  },
  methods: {
    ...mapMutations('sign', ['TOGGLE_SIGNUP']),
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/_signin.scss';
</style>
