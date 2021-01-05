<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="content">
      <!-- 진행상황 -->
      <v-row
        no-gutters
        align="center"
        style="margin: 129px 0 96px 0; font-size: 20px;"
        space-between
      >
        <v-col cols="auto">
          <div style="font-size: 52px;">
            광고 신청하기
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <span class="text-primary3">&#9312; 시점/지점 선택</span>
          <span style="margin: 0 var(--spacing-md)">···</span>
          <span>&#9313; 광고정보입력</span>
          <span style="margin: 0 var(--spacing-md)">···</span>
          <span>&#9314; 신청 완료</span>
        </v-col>
      </v-row>

      <!-- 선택 -->
      <v-row no-gutters space-between>
        <v-col cols="auto">
          <div class="cardTitle">
            광고 크기
          </div>
          <v-card outlined width="520px" height="183px" style="margin-bottom: 32px;">
            <label class="checkArea">
              <input
                type="checkbox"
                name="posterType"
                value="R1"
                @click="[checkedValue(), oneCheckbox(0)]"
              />
              <i class="checkIcon"></i>1x1 (300*250)
            </label>
            <label class="checkArea">
              <input
                type="checkbox"
                name="posterType"
                value="R2"
                @click="[checkedValue(), oneCheckbox(1)]"
              />
              <i class="checkIcon"></i>1x2 (300*516)
            </label>
            <label class="checkArea">
              <input
                type="checkbox"
                name="posterType"
                value="R3"
                @click="[checkedValue(), oneCheckbox(2)]"
              />
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
              item-text="text"
              item-value="value"
              label="게시 기간을 선택해주세요."
              single-line
              @change="addMonth(date, selectPeriod)"
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
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <div class="cardTitle">
            광고 위치
          </div>
          <v-card class="posterPosition" outlined width="624px" height="570px">
            <div style="font-size: 20px;">
              광고의 크기와 게시기간을 선택해주세요.
            </div>
            <template v-else>
              <div style="height: 36px;"></div>
              <v-item-group>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary2' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary2' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary2' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary2' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary2' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="n in 6" :key="n">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? 'background-primary3' : 'background-light4'"
                        flat
                        tile
                        style="margin: 4px;"
                        @click="toggle"
                        @mouseup="nextStepToggle()"
                      >
                        <v-scroll-y-transition>
                          <div style="width: 84px; height: 64px;"></div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-item-group>
              <v-row no-gutters align="center">
                <div
                  style="width: 24px; height: 24px; background-color: var(--light4); margin-right: 15px;"
                ></div>
                <div style="margin-right: 30px; font-size: 20px;">
                  예약가능
                </div>
                <div
                  style="width: 24px; height: 24px; background-color: var(--light2); margin-right: 15px;"
                ></div>
                <div style="margin-right: 30px; font-size: 20px;">
                  예약불가
                </div>
                <div
                  style="width: 24px; height: 24px; background-color: var(--primary3); margin-right: 15px;"
                ></div>
                <div style="font-size: 20px;">
                  선택됨
                </div>
              </v-row>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 다음 -->
    <v-row no-gutters style="margin: 96px 0 128px 0;">
      <v-btn v-if="!isNextStep" block disabled depressed height="176px" style="font-size: 52px">
        다음
      </v-btn>
      <v-btn
        v-else
        block
        depressed
        to="ownerApply2"
        height="176px"
        style="font-size: 52px; color: var(--light5);"
        color="var(--primary1)"
      >
        다음
      </v-btn>
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
      period: [
        { text: '30일', value: 1 },
        { text: '60일', value: 2 },
        { text: '90일', value: 3 },
      ],
      selectPeriod: { text: '개월', value: 0 },
      warning: require('~/static/icon/warning.svg'),
      nextStep: require('~/static/icon/nextStep.svg'),
      posterType: '',
      posterWidth: '',
      posterHeight: '',
      finishedDate: '',
      isAdvertType: false,
      isSelectPeriod: false,
      isNextStep: false,
    };
  },
  methods: {
    checkedValue() {
      const checkBox = document.getElementsByName('posterType');
      for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
          this.posterType = checkBox[i].value;
          this.posterWidth = 300;
          if (this.posterType === 'R1') this.posterHeight = 250;
          else if (this.posterType === 'R2') this.posterHeight = 516;
          else this.posterHeight = 782;
        }
      }
      this.isAdvertType = true;
    },
    oneCheckbox(posterType) {
      const checkBox = document.getElementsByName('posterType');
      for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i] !== checkBox[posterType]) {
          checkBox[i].checked = false;
        } else checkBox[i].checked = true;
      }
    },
    addMonth(selectedDate, selectedPeriod) {
      const date = new Date(selectedDate);
      date.setDate(date.getDate() + 30 * selectedPeriod);
      this.finishedDate = date.toISOString().substr(0, 10);
      this.isSelectPeriod = true;
    },
    nextStepToggle() {
      this.isNextStep = !this.isNextStep;
    },
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
}
.content {
  margin: 0 18.3%;
}
.v-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.posterPosition {
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
