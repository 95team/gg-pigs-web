<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="navigation" style="font-size: 20px;">
      <div style="font-weight: bold; margin-bottom: 25px; border-right: 5px solid #797991">
        광고 현황&nbsp;&nbsp;
      </div>
      <div>
        <nuxt-link to="/adminPageApproval">
          승인 대기
        </nuxt-link>
      </div>
    </div>

    <div class="contents">
      <v-dialog v-model="dialog" persistent max-width="1240px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            상세정보
          </v-btn>
        </template>
        <v-card style="padding: 4% 7%;">
          <v-card-title style="margin-bottom: 5%;">
            <v-row class="notoSansFont">
              <v-col style="font-size: 32px; font-weight: 900;">
                광고 제목
              </v-col>
              <v-col align="end">
                <v-btn text>
                  <v-img
                    :src="closeIcon"
                    style="width: 24px; height: 24px;"
                    @click="dialog = false"
                  ></v-img>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="notoSansFont" style="font-size: 16px; color: #000000;">
            <v-row>
              <v-col md="7">
                <v-row no-gutters style="margin-bottom: 8px;">
                  <v-btn depressed style="margin-right: 20px;">
                    수정
                  </v-btn>
                  <v-btn depressed>
                    삭제
                  </v-btn>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 70px; "
                >
                  <v-col md="3" style="font-weight: bold;">
                    상태
                  </v-col>
                  <v-col>
                    신규
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 110px;"
                >
                  <v-col md="3" style="font-weight: bold;">
                    <v-row no-gutters style="margin-bottom: 12px;">
                      시작 날짜
                    </v-row>
                    <v-row no-gutters>
                      종료 날짜
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row no-gutters style="margin-bottom: 12px;">
                      2020.20.20
                    </v-row>
                    <v-row no-gutters>
                      2020.20.20
                    </v-row>
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 70px;"
                >
                  <v-col md="3" style="font-weight: bold;">
                    기간
                  </v-col>
                  <v-col>
                    1개월
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 170px;"
                >
                  <v-col md="3" style="font-weight: bold;">
                    상세정보
                  </v-col>
                  <v-col>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 110px;"
                >
                  <v-col md="3" style="font-weight: bold;">
                    태그
                  </v-col>
                  <v-col>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  style="border-bottom: solid 1px #707070; height: 110px;"
                >
                  <v-col md="3" style="font-weight: bold;">
                    <v-row no-gutters style="margin-bottom: 12px;">
                      랜딩 페이지
                    </v-row>
                    <v-row no-gutters>
                      검사 여부
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row no-gutters style="margin-bottom: 12px;">
                      www.dankook.ac.kr
                    </v-row>
                    <v-row no-gutters>
                      완료
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col md="4" align="end">
                <img src="../static/image/type3.png" alt="광고 이미지" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
      <div style="font-size: 32px; font-weight: bold; margin-bottom: 48px;">
        광고 현황
      </div>

      <div class="search">
        <v-row no-gutters align="center">
          <v-col md="2">
            <v-menu
              ref="isSelectedDate"
              v-model="isSelectedDate"
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
                <v-btn text color="primary" @click="isSelectedDate = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.isSelectedDate.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col md="1" offset="1">
            <v-select :items="pages" label="page"></v-select>
          </v-col>
          <v-col md="1" offset="1">
            <v-select v-model="select" :items="titles" single-line></v-select>
          </v-col>
          &nbsp;
          <v-col md="2">
            <v-text-field label="검색어" clearable></v-text-field>
          </v-col>
          <span>
            <button type="button">
              <v-img :src="searchIcon" style="width: 30px; heigth: 30px;"></v-img>
            </button>
          </span>
        </v-row>
      </div>

      <div class="sort">
        <v-row no-gutters style="height: 84px;" align="center">
          <v-col>
            <input v-model="isCheckAll" type="checkbox" @click="checkAll" />
          </v-col>
          <v-col md="4" align="center">
            광고 제목
            <span v-if="titleFlag" @click="titleSort">내</span>
            <span v-else @click="titleSort">오</span>
          </v-col>
          <v-col md="1" align="center">
            시작 날짜
            <span v-if="startedDateFlag" @click="startDateSort">내</span>
            <span v-else @click="startDateSort">오</span>
          </v-col>
          <v-col md="1" align="center">
            종료 날짜
            <span v-if="finishedDateFlag" @click="finishDateSort">내</span>
            <span v-else @click="finishDateSort">오</span>
          </v-col>
          <v-col align="center">기간</v-col>
          <v-col md="3"></v-col>
        </v-row>
        <ul>
          <li v-for="(advert, idx) in adverts" :key="idx">
            <v-row no-gutters style="height: 84px;" align="center">
              <v-col>
                <input v-model="checked" :value="advert" type="checkbox" @change="updateCheckall" />
              </v-col>
              <v-col md="4" align="center">{{ advert.title }}</v-col>
              <v-col md="1" align="center">{{ advert.startedDate }}</v-col>
              <v-col md="1" align="center">{{ advert.finishedDate }}</v-col>
              <v-col align="center">개월</v-col>
              <v-col md="1" align="center">
                <input type="button" value="상세정보" style="font-weight: bold;" />
              </v-col>
              <v-col md="1" align="end">
                <input class="statusBtn" type="button" value="정보 수정" />
              </v-col>
              <v-col md="1" align="center">
                <input class="statusBtn" type="button" value="게시 중단" />
              </v-col>
            </v-row>
          </li>
        </ul>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import { baseApiUrl } from '../api/index.js';

export default {
  layout: 'adminDefault',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      isSelectedDate: false,
      pages: ['1', '2', '3', '4', '5'],
      select: '제목',
      titles: ['제목', '시작 날짜', '종료 날짜', '기간'],
      adverts: [],
      isCheckAll: false,
      checked: [],
      searchIcon: require('../static/icon/search.svg'),
      dialog: false,
      closeIcon: require('../static/icon/close.svg'),
      titleFlag: false,
      startedDateFlag: false,
      finishedDateFlag: false,
    };
  },
  created() {
    const vm = this;
    axios
      .get(`${baseApiUrl}/advertisements?page=-1`)
      .then(function(response) {
        console.log(response.data);
        vm.adverts = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    checkAll() {
      this.isCheckAll = !this.isCheckAll;
      this.checked = [];
      if (this.isCheckAll) {
        for (const key in this.adverts) {
          this.checked.push(this.adverts[key]);
        }
      }
    },
    updateCheckall() {
      if (this.checked.length === this.adverts.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
    titleSort() {
      if (this.titleFlag) {
        this.titleFlag = !this.titleFlag;
        this.adverts.sort(function(a, b) {
          return a.title > b.title ? 1 : -1;
        });
      } else {
        this.titleFlag = !this.titleFlag;
        this.adverts.sort(function(a, b) {
          return a.title < b.title ? 1 : -1;
        });
      }
    },
    startDateSort() {
      if (this.startedDateFlag) {
        this.startedDateFlag = !this.startedDateFlag;
        this.adverts.sort(function(a, b) {
          const dateA = new Date(a.startedDate).getTime();
          const dateB = new Date(b.startedDate).getTime();
          return dateA > dateB ? 1 : -1;
        });
      } else {
        this.startedDateFlag = !this.startedDateFlag;
        this.adverts.sort(function(a, b) {
          const dateA = new Date(a.startedDate).getTime();
          const dateB = new Date(b.startedDate).getTime();
          return dateA < dateB ? 1 : -1;
        });
      }
    },
    finishDateSort() {
      if (this.finishedDateFlag) {
        this.finishedDateFlag = !this.finishedDateFlag;
        this.adverts.sort(function(a, b) {
          const dateA = new Date(a.finishedDate).getTime();
          const dateB = new Date(b.finishedDate).getTime();
          return dateA > dateB ? 1 : -1;
        });
      } else {
        this.finishedDateFlag = !this.finishedDateFlag;
        this.adverts.sort(function(a, b) {
          const dateA = new Date(a.finishedDate).getTime();
          const dateB = new Date(b.finishedDate).getTime();
          return dateA < dateB ? 1 : -1;
        });
      }
    },
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  width: 1335px;
  height: 84px;
  border-radius: 12px;
  border: solid 1px #707070;
  margin-bottom: 20px;
}
input[type='checkbox'] {
  transform: scale(2);
  margin: 0 40px;
}
.container {
  max-width: 1920px;
  display: flex;
}
.navigation {
  width: 340px;
  display: flex;
  padding: 66px 0;
  flex-direction: column;
  align-items: center;
}
.contents {
  border-left: solid 1px #707070;
  padding: 66px 5%;
}
.search {
  width: 1335px;
  height: 84px;
  border-radius: 12px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 25px;
}
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.statusBtn {
  width: 100px;
  height: 45px;
  border-radius: 11px;
  background-color: #f0f2f8;
}
</style>
