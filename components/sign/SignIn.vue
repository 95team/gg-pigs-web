<template>
  <div v-if="isShowSignIn" class="inner">
    <v-card flat>
      <v-form>
        <v-container>
          <v-row justify="end">
            <v-btn text plain :ripple="false" @click="TOGGLE_SIGNIN">
              <span class="material-icons">
                close
              </span>
            </v-btn>
          </v-row>
          <v-card-title>로그인</v-card-title>
          <v-row no-gutters>
            <v-col cols="12">
              <div class="label">이메일</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="label">비밀번호</div>
              <v-text-field outlined hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <div class="btn-wrapper">
            <v-btn color="primary" elevation="1" height="64px" block :ripple="false">로그인</v-btn>
          </div>
        </v-card-actions>
      </v-form>
      <v-container>
        <v-row justify="center">
          <v-btn :ripple="false" text plain @click="TOGGLE_SIGNUP(), TOGGLE_SIGNIN()">
            회원가입
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SignIn',
  computed: {
    ...mapState('sign', ['isShowSignIn']),
  },
  methods: {
    ...mapMutations('sign', ['TOGGLE_SIGNIN', 'TOGGLE_SIGNUP']),
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/_signin.scss';
</style>
