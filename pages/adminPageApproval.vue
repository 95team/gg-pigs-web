<template>
  <v-container fluid pa-0 class="font">
    <div class="navigation" style="font-size: 20px;">
      <div>
        <nuxt-link to="/adminPageStatus">
          광고 현황
        </nuxt-link>
      </div>
      <div style="font-weight: bold; margin-top: 25px; border-right: 5px solid #797991">
        승인 대기&nbsp;&nbsp;
      </div>
    </div>

    <div class="contents">
      <div style="font-size: 32px; font-weight: bold; margin-bottom: 48px;">
        승인 대기
      </div>

      <div class="search">
        <v-row no-gutters align="center">
          <v-col md="3">
            <label><input type="checkbox" name="전체" /> 전체 </label>&nbsp;&nbsp;
            <label><input type="checkbox" name="신규" /> 신규 </label>&nbsp;&nbsp;
            <label><input type="checkbox" name="보류" /> 보류 </label>&nbsp;&nbsp;
            <label><input type="checkbox" name="삭제" /> 삭제 </label>
          </v-col>
          <v-col md="2">
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
          </v-col>
          <v-col md="1" offset="1">
            <v-select :items="pages" label="page"></v-select>
          </v-col>
          <v-col md="1" offset="1">
            <v-select v-model="select" :items="titles" label="검색 기준" single-line></v-select>
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
          <v-col md="4" align="center">광고 제목</v-col>
          <v-col align="center">상태</v-col>
          <v-col md="1" align="center">시작 날짜</v-col>
          <v-col md="1" align="center">종료 날짜</v-col>
          <v-col align="center">기간</v-col>
          <v-col></v-col>
          <v-col md="3"></v-col>
        </v-row>
        <ul>
          <li v-for="(ad, idx) in ads" :key="idx">
            <v-row no-gutters style="height: 84px;" align="center">
              <v-col>
                <input v-model="checked" :value="ad" type="checkbox" @change="updateCheckall" />
              </v-col>
              <v-col md="4">{{ ad.title }}</v-col>
              <v-col align="center">신규</v-col>
              <v-col md="1" align="center">{{ ad.startedDate }}</v-col>
              <v-col md="1" align="center">{{ ad.finishedDate }}</v-col>
              <v-col align="center">개월</v-col>
              <v-col align="center">
                <input type="button" value="상세정보" style="font-weight: bold;" />
              </v-col>
              <v-col md="3" align="end">
                <input class="statusBtn" type="button" value="보류" />&nbsp;&nbsp;
                <input class="statusBtn" type="button" value="삭제" />&nbsp;&nbsp;
                <input class="statusBtn" type="button" value="승인" />&nbsp;&nbsp;
              </v-col>
            </v-row>
          </li>
        </ul>
      </div>

      <div class="checkedStatus">
        <v-row no-gutters align="center">
          <v-col align="center">
            <input class="checkedStatusBtn" type="button" value="선택 삭제" />&nbsp;&nbsp;
          </v-col>
          <v-col align="center">
            <input class="checkedStatusBtn" type="button" value="선택 보류" />&nbsp;&nbsp;
          </v-col>
          <v-col align="center">
            <input class="checkedStatusBtn" type="button" value="선택 승인" />&nbsp;&nbsp;
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  layout: 'adminDefault',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      pages: ['1', '2', '3', '4', '5'],
      select: '제목',
      titles: ['제목', '상태', '시작 날짜', '기간'],
      ads: [],
      isCheckAll: false,
      checked: [],
      searchIcon: require('../static/icon/search.svg'),
    };
  },
  created() {
    const vm = this;
    axios
      .get('http://hj2server.ddns.net:8484/api/v1/advertisements')
      .then(function(response) {
        vm.ads = response.data.data;
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
        for (const key in this.ads) {
          this.checked.push(this.ads[key]);
        }
      }
    },
    updateCheckall() {
      if (this.checked.length === this.ads.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
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
.search input[type='checkbox'] {
  transform: scale(1.3);
}
.sort input[type='checkbox'] {
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
.checkedStatus {
  float: right;
}
.font {
  font-family: 'Noto Sans KR', sans-serif;
}
.statusBtn {
  width: 75px;
  height: 45px;
  border-radius: 11px;
  background-color: #f0f2f8;
  font-size: 14px;
}
.checkedStatusBtn {
  width: 161px;
  height: 43px;
  margin-top: 8px;
  padding: 9px 48px;
  border-radius: 11px;
  background-color: #f0f2f8;
  font-size: 17px;
}
</style>
