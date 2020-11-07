<template>
  <v-container fluid pa-0 class="font">
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
      <div style="font-size: 32px; font-weight: bold; margin-bottom: 48px;">
        광고 현황
      </div>

      <div class="search">
        <v-row no-gutters align="center">
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
            <v-select :items="titles"></v-select>
          </v-col>
          &nbsp;
          <v-col md="2">
            <v-text-field label="검색어" clearable></v-text-field>
          </v-col>
          <span>
            <button type="button">
              <img src="../static/image/pangoLogoDay.png" alt="검색 버튼" />
            </button>
          </span>
        </v-row>
      </div>

      <div class="sort">
        <v-row no-gutters style="height: 84px;" align="center">
          <v-col><input type="checkbox"/></v-col>
          <v-col md="3" align="center">광고 제목</v-col>
          <v-col md="2" align="center">시작 날짜</v-col>
          <v-col align="center">기간</v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
        <ul>
          <li v-for="(ad, idx) in ads" :key="idx">
            <v-row no-gutters style="height: 84px;">
              <v-col><input type="checkbox"/></v-col>
              <v-col md="3">{{ ad.title }}</v-col>
              <v-col md="2" align="center">{{ ad.startedDate }}</v-col>
              <v-col align="center">개월</v-col>
              <v-col align="end">상세정보</v-col>
              <v-col align="end">
                <input class="btn" type="button" value="정보 수정" />
              </v-col>
              <v-col align="center">
                <input class="btn" type="button" value="게시 중단" />
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
export default {
  layout: 'adminDefault',
  data() {
    return {
      ads: [],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      pages: ['1', '2', '3', '4', '5'],
      titles: ['제목', '시작 날짜', '기간'],
    };
  },
  created() {
    const vm = this;
    axios
      .get('http://hj2server.ddns.net:8484/api/v1/advertisements')
      .then(function(response) {
        console.log(response.data.data);
        vm.ads = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
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
  line-height: 84px;
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
  padding: 66px 5%;
  flex-direction: column;
  align-items: flex-start;
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
.font {
  font-family: 'Noto Sans KR', sans-serif;
}
.btn {
  width: 130px;
  /* height: 45px; */
  border-radius: 11px;
  background-color: #f0f2f8;
}
</style>
