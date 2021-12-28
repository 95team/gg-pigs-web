<template>
  <header>
    <div class="header-area">
      <div class="header-item">
        <nuxt-link to="/">
          <img
            :src="isLight ? lightMainLogo : darkMainLogo"
            alt="광고돼지 메인 로고"
            class="logo-button"
          />
        </nuxt-link>
      </div>

      <div class="header-item">
        <button v-for="tab in tabs" :key="tab.name" class="tab">
          <nuxt-link :to="tab.url" class="tab-link">
            {{ tab.name }}
          </nuxt-link>
        </button>
      </div>

      <div class="header-item service-area">
        <div class="service-button" @click="TOGGLE_THEMEMODE">
          <img
            :src="isLight ? lightThemeMode : darkThemeMode"
            alt="테마 모드"
            class="service-icon"
          />
        </div>
        <nuxt-link to="/">
          <div class=" service-button">
            <img :src="isLight ? lightPoster : darkPoster" alt="메인 페이지" class="service-icon" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations, createNamespacedHelpers } from 'vuex';

const { mapState: ownerState, mapGetters: ownerGetters } = createNamespacedHelpers('owner');

export default {
  name: 'OwnerHeader',
  computed: {
    ...ownerState(['tabs']),
    ...mapGetters(['lightMainLogo', 'darkMainLogo', 'lightThemeMode', 'darkThemeMode']),
    ...ownerGetters(['lightPoster', 'darkPoster']),
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
a.tab-link {
  color: var(--color);
  text-decoration: none;
}

a.nuxt-link-active {
  font-weight: bold;
  color: var(--color-primary);
}

header {
  background: var(--bg);
  border-bottom: 1px solid var(--border-color);
}

.header-area {
  display: flex;
  align-items: center;

  width: 1200px;
  height: 80px;
  margin: 0 auto;
}
.header-item:nth-child(1) {
  flex-grow: 1;
}
.header-item:nth-child(2) {
  flex-grow: 5;
}
.header-item:nth-child(3) {
  flex-grow: 1;
}

.logo-button {
  width: 96px;
  height: 29px;
}

.tab-link {
  padding: 1rem;
  font-size: 1.125rem;
}

.service-area {
  display: flex;
  justify-content: flex-end;
}
.service-button {
  width: 32px;
  height: 32px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 12px;
}
.service-icon {
  width: 24px;
  height: 24px;
}
</style>
