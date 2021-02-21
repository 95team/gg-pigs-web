<template>
  <v-container fluid pa-0 class="noto-sans-font">
    <div class="content">
      <v-row no-gutters align="center" class="mt128 mb32">
        <v-col cols="auto" class="fz32">광고 신청하기</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="fz13">
          <span class="mr16 text-primary2">&#9312;시점/지점 선택</span>
          <span class="mr16 text-light2">···</span>
          <span class="mr16 text-light2">&#9313;광고정보입력</span>
          <span class="mr16 text-light2">···</span>
          <span class="text-light2">&#9314;신청 완료</span>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row no-gutters align="center" class="mt64 mb96 fz18">
        <v-col cols="auto">
          <v-row no-gutters cross-start align="center" class="mb32 direction-column">
            <div class="mb16">광고 크기</div>
            <v-card tile outlined width="488px" height="183px">
              <v-card-text class="px-12">
                <v-checkbox
                  v-model="posterType"
                  name="posterType"
                  class="label-font-size"
                  hide-details
                  label="1x1 (300*250)"
                  color="var(--primary2)"
                  value="R1"
                  @change="oneChecked"
                ></v-checkbox>
                <v-checkbox
                  v-model="posterType"
                  name="posterType"
                  class="label-font-size"
                  hide-details
                  label="1x2 (300*516)"
                  color="var(--primary2)"
                  value="R2"
                  @change="oneChecked"
                ></v-checkbox>
                <v-checkbox
                  v-model="posterType"
                  name="posterType"
                  class="label-font-size"
                  hide-details
                  label="1x3 (300*782)"
                  color="var(--primary2)"
                  value="R3"
                  @change="oneChecked"
                ></v-checkbox>
              </v-card-text>
            </v-card>
          </v-row>

          <v-row no-gutters align="center" class="mb32 direction-column">
            <div class="mb16">시작 날짜</div>
            <v-card tile outlined width="488px" height="88px">
              <v-card-text class="px-12">
                <v-menu
                  ref="menu"
                  v-model="isSelecting"
                  offset-y
                  transition="slide-y-transition"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      prepend-icon="mdi-calendar"
                      color="var(--primary2)"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    width="390px"
                    color="var(--primary2)"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text class="text-primary2" @click="$refs.menu.save(date)">적용</v-btn>
                    <v-btn text class="text-primary2" @click="isSelecting = false">취소</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-card-text>
            </v-card>
          </v-row>

          <v-row no-gutters align="center" class="direction-column">
            <div class="mb16">게시 기간</div>
            <v-card tile outlined width="488px" height="88px">
              <v-card-text class="px-12">
                <v-select
                  v-model="period"
                  :items="periods"
                  color="var(--primary2)"
                  label="게시 기간을 선택해주세요."
                  class="label-font-size"
                  solo
                  flat
                  return-object
                >
                </v-select>
              </v-card-text>
            </v-card>
            <div class="text-light2" style="margin-top: 8px;">
              현재 게시기간은 30일만 가능합니다.
            </div>
          </v-row>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-row no-gutters align="center" class="direction-column">
            <div class="mb16">광고 위치</div>
            <v-card tile outlined width="624px" height="548px"> </v-card>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-row no-gutters class="mb128">
      <v-btn
        block
        depressed
        color="var(--primary1)"
        height="176px"
        style="font-size: 52px; color: var(--light5)"
        :ripple="false"
        to="step2"
        @click.native="sendInfo"
      >
        다음
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'owner/default',
  data() {
    return {
      posterType: '',
      date: new Date().toISOString().substr(0, 10),
      isSelecting: false,
      period: { text: '30일', value: 1 },
      periods: [{ text: '30일', value: 1 }],
    };
  },
  methods: {
    sendInfo() {
      const date = new Date(this.date);
      if (this.period.value) date.setDate(date.getDate() + 30 * this.period.value - 1);
      const finishedDate = date.toISOString().substr(0, 10);
      this.$store.commit('apply/SEND_INFORMATION', {
        posterType: this.posterType,
        startedDate: this.date,
        finishedDate,
      });
      this.$store.commit('apply/FETCH_IMG_HEIGHT');
    },
    oneChecked() {
      const poster = document.getElementsByName('posterType');
      for (let i = 0; i < poster.length; i++) {
        poster[i].posterType = '';
      }
    },
  },
};
</script>

<style scoped>
.noto-sans-font {
  font-family: 'Noto Sans KR', sans-serif;
}
.content {
  margin: 0 18.3%;
}
.direction-column {
  flex-direction: column;
  align-items: flex-start !important;
}
.label-font-size >>> label {
  font-size: 18px;
}
.v-input {
  font-size: 18px;
}
</style>
