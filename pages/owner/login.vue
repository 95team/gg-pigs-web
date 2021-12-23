<template>
  <div class="contents">
    <div class="login-title align-center">광고 조회</div>
    <form @submit.prevent="submitForm">
      <div class="align-center">
        <div class="login-info">
          <label for="email">이메일</label>
        </div>
        <input id="email" v-model="email" type="email" class="login-input" />
      </div>
      <div class="align-center">
        <div class="login-info">
          <label for="password">비밀번호</label>
        </div>
        <input id="password" v-model="password" type="password" class="login-input" />
      </div>
      <div class="divider"></div>
      <div class="align-center">
        <button type="submit" class="submit-container">조회하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OwnerLogin',
  layout: 'owner/default',
  computed: {
    email: {
      get() {
        return this.$store.state.owner.email;
      },
      set(updateEmail) {
        this.$store.commit('owner/UPDATE_EMAIL', updateEmail);
      },
    },
    password: {
      get() {
        return this.$store.state.owner.password;
      },
      set(updatePassword) {
        this.$store.commit('owner/UPDATE_PASSWORD', updatePassword);
      },
    },
  },
};
</script>

<style scoped>
input.login-input {
  border: 1px solid var(--border-color-primary);
  border-radius: 4px;
}

.contents {
  background-color: var(--bg);
}

.align-center {
  max-width: 587px;
  margin: 0 auto;
}

.login-title {
  color: var(--color-primary);
  font-size: 2.75rem;
  font-weight: bold;

  padding-top: 96px;
  padding-bottom: 32px;
}

.login-info {
  color: var(--color);
  font-size: 0.875rem;

  padding-top: 16px;
  padding-bottom: 4px;
}

.login-input {
  max-width: 100%;
  width: 587px;
  height: 64px;

  background-color: var(--bg-primary);
  color: var(--color-primary);
  font-size: 1.125rem;

  padding: 0 28px;
}

.divider {
  max-width: 794px;
  border: 1px solid var(--border-color-primary);

  margin: 52px auto;
}

.submit-container {
  max-width: 100%;
  width: 587px;
  height: 64px;

  background-color: var(--primary1);
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 4px;

  margin-bottom: 320px;
}
</style>
