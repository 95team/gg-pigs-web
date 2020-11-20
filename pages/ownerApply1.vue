<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="content">
      <!-- 진행상황 -->
      <v-row no-gutters align="center" style="margin: 129px 0 96px 0; font-size: 20px;">
        <div style="font-size: 52px;">
          광고 신청하기
        </div>
        <v-spacer></v-spacer>
        <span class="text-primary3">&#9312; 시점/지점 선택</span>
        <span style="margin: 0 var(--spacing-md)">···</span>
        <span>&#9313; 광고정보입력</span>
        <span style="margin: 0 var(--spacing-md)">···</span>
        <span>&#9314; 신청 완료</span>
      </v-row>

      <!-- 선택 -->
      <v-row no-gutters>
        <v-col>
          <div class="cardTitle">
            광고 크기
          </div>
          <v-card outlined width="520px" height="183px" style="margin-bottom: 32px;">
            <label class="checkArea">
              <input type="checkbox" name="1x1" value="300*250" />
              <i class="checkIcon"></i>1x1 (300*250)
            </label>
            <label class="checkArea">
              <input type="checkbox" name="1x2" value="300*516" />
              <i class="checkIcon"></i>1x2 (300*516)
            </label>
            <label class="checkArea">
              <input type="checkbox" name="1x3" value="300*782" />
              <i class="checkIcon"></i>1x3 (300*782)
            </label>
          </v-card>

          <div class="cardTitle">
            시작 날짜
          </div>
          <v-card
            outlined
            width="520px"
            height="93px"
            style="padding: 10px 52px; margin-bottom: 32px;"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-card>

          <div class="cardTitle">
            게시 기간
          </div>
          <v-card
            outlined
            width="520px"
            height="85px"
            style="padding: 10px 52px; margin-bottom: 12px;"
          >
            <v-select
              v-model="selectPeriod"
              :items="period"
              label="SelectPeriod"
              single-line
            ></v-select>
          </v-card>
          <div
            class="text-light2"
            style="display: flex; align-items: center; padding-left: 12px; font-size: 20px;"
          >
            <v-img :src="warning" class="warningIcon"></v-img>
            <div style="margin-left: 23px;">
              현재 게시기간은 1개월만 가능합니다.
            </div>
          </div>
        </v-col>

        <v-col>
          <div class="cardTitle">
            광고 위치
          </div>
          <v-card class="advertPosition" outlined width="624px" height="570px">
            <div style="font-size: 20px;">
              광고의 크기와 게시기간을 선택해주세요.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 다음 -->
    <v-row no-gutters style="margin: 96px 0 128px 0;">
      <nuxt-link to="/ownerApply2">
        <v-img :src="nextStep"></v-img>
      </nuxt-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'ownerDefault',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      period: ['1개월', '2개월', '3개월'],
      selectPeriod: '1개월',
      warning: require('~/static/icon/warning.svg'),
      nextStep: require('~/static/icon/nextStep.svg'),
    };
  },
};
</script>

<style scoped>
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.checkArea {
  cursor: pointer;
}
.checkArea input[type='checkbox'] {
  display: none;
}
.checkArea .checkIcon {
  display: inline-block;
  width: 29px;
  height: 29px;
  background: url(~static/icon/unCheckedBox.svg) left center no-repeat;
  text-align: center;
  vertical-align: middle;
  margin: 4px 16px 4px 52px;
}
.checkArea input[type='checkbox']:checked + .checkIcon {
  background-image: url(~static/icon/checkedBox.svg);
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
}
.content {
  margin: 0 18.3%;
}
.v-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.advertPosition {
  align-items: center;
}
.cardTitle {
  margin-bottom: 16px;
  font-size: 24px;
}
.warningIcon {
  position: absolute;
  width: 17px;
  height: 15px;
}
</style>
