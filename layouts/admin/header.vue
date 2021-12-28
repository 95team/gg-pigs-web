<template>
  <v-container fluid pa-0>
    <v-row no-gutters align="center">
      <div style="margin-left: 10%;">
        <!-- <img src="~/static/image/pangoLogoDay.png" alt="광고돼지" width="118px" height="39px" /> -->
      </div>
      <v-spacer></v-spacer>
      <div style="margin-right: 10%;">
        <div class="appLink" style="float:left; margin-right: 19px;">노션</div>
        <div class="appLink" style="float:right;">슬랙</div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 130px;
  border-bottom: solid 1px #707070;
  display: flex;
}
.appLink {
  width: 54px;
  height: 54px;
  border: solid 1px #707070;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
