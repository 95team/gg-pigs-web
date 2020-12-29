<template>
  <div class="sidebar">
    <div>
      <v-tabs
        vertical
        fixed-tabs
        color="black"
        slider-size="4"
        slider-color="#797991"
        active-class="selected"
      >
        <v-tab class="tab-item" :ripple="false" replace :to="{ name: 'admin-lists' }">
          광고 현황
        </v-tab>
        <v-tab class="tab-item" :ripple="false" replace :to="{ name: 'admin-checklist' }">
          승인 대기
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;

  padding: 66px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px #707070;
}

.tab-item {
  margin-right: 1.7%;

  font: normal normal normal 20px NotoSansCJKkr;
  line-height: 1.45;

  letter-spacing: normal;
  color: var(--black);
}

.selected {
  font-weight: bold;
}
</style>
