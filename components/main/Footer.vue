<template>
  <div class="footer-area">
    <v-container fluid pa-0>
      <v-row no-gutters align="center" justify="end" class="content-area">
        <v-col cols="auto">
          &copy; {{ new Date().getFullYear() }} Pigs95team, Inc. All rights reserved
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-area {
  border-top: 1px solid var(--border-color-primary);
}
.content-area {
  font-size: 14px;
  color: var(--color-primary);
}
/* Viewport: lg ~ */
@media all and (min-width: 1264px) {
  .footer-area {
    padding: 0 32px;
  }
  .content-area {
    max-width: 1500px;
    height: 124px;

    margin: 0 auto;
  }
}

/* Viewport: md */
@media all and (min-width: 600px) and (max-width: 1263px) {
  .footer-area {
    padding: 0 32px;
  }
  .content-area {
    max-width: 744px;
    height: 92px;

    margin: 0 auto;
  }
}

/* Viewport: ~ sm */
@media all and (max-width: 599px) {
  .footer-area {
    padding: 0 8px;
  }
  .content-area {
    max-width: 536px;
    height: 92px;

    margin: 0 auto;
  }
}
</style>
