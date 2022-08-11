<template>
  <v-app>
    <main-header></main-header>
    <nuxt />
    <main-footer></main-footer>
    <ApplyPoster />
    <SignIn />
    <SignUp />
  </v-app>
</template>

<script>
import MainHeader from '~/components/main/Header.vue';
import MainFooter from '~/components/main/Footer.vue';
import ApplyPoster from '~/components/apply/ApplyPoster.vue';
import SignIn from '~/components/sign/SignIn.vue';
import SignUp from '~/components/sign/SignUp.vue';

export default {
  name: 'MainDefault',
  components: {
    MainHeader,
    MainFooter,
    ApplyPoster,
    SignIn,
    SignUp,
  },
};
</script>

<style>
#app {
  background-color: var(--bg);
  font-family: 'Spoqa Han Sans Neo', sans-serif;
}
</style>
