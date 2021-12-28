<template>
  <div class="header-area">
    <v-container pa-0>
      <v-row no-gutters align="center" justify="space-between">
        <nuxt-link to="/">
          <v-col class="logo-button">
            <v-img :src="isLight ? lightMainLogo : darkMainLogo"></v-img>
          </v-col>
        </nuxt-link>

        <v-col cols="auto">
          <button class="service-button" @click="TOGGLE_THEMEMODE">
            <v-img :src="isLight ? lightThemeMode : darkThemeMode" class="service-icon"></v-img>
          </button>
          <nuxt-link to="/apply">
            <button class="service-button">
              <v-img :src="isLight ? lightApply : darkApply" class="service-icon"></v-img>
            </button>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainHeader',
  computed: {
    ...mapGetters([
      'lightMainLogo',
      'darkMainLogo',
      'lightThemeMode',
      'darkThemeMode',
      'lightApply',
      'darkApply',
    ]),
    isLight() {
      return this.$colorMode.preference === 'light';
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_THEMEMODE']),
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.logo-button {
  padding: 0;
}

@media all and (min-width: 1264px) {
  .header-area {
    padding: 0 32px;
  }
  .container {
    max-width: 1500px;
    height: 80px;
  }
  .logo-button {
    max-width: 96px;
    height: 29px;
  }
  .service-button {
    width: 32px;
    height: 32px;

    margin-left: 24px;
    padding: 4px;
  }
  .service-icon {
    max-width: 24px;
  }
}

@media all and (min-width: 600px) and (max-width: 1263px) {
  .header-area {
    padding: 0 32px;
  }
  .container {
    max-width: 744px;
    height: 60px;
  }
  .logo-button {
    max-width: 62px;
    height: 18px;
  }
  .service-button {
    width: 48px;
    height: 48px;

    padding: 15px;
  }
  .service-icon {
    max-width: 18px;
  }
}

@media all and (max-width: 599px) {
  .header-area {
    padding: 0 8px;
  }
  .container {
    max-width: 536px;
    height: 60px;
  }
  .logo-button {
    max-width: 62px;
    height: 18px;
  }
  .service-button {
    width: 48px;
    height: 48px;

    padding: 15px;
  }
  .service-icon {
    max-width: 18px;
  }
}
</style>
