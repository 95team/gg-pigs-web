<template>
  <v-card flat>
    <v-form>
      <v-container>
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
          <v-btn color="primary" elevation="1" height="64px" block :ripple="false">조회하기</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/_signin.scss';
</style>
