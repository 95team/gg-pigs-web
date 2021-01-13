<template>
  <v-container fluid class="font">
    <v-row no-gutters>
      <div style="font-size: 32px; font-weight: bold; margin-bottom: 48px;">
        승인 대기
      </div>
    </v-row>
    <v-row class="search" no-gutters align="center">
      <v-col class="d-flex justify-center" cols="6" align="center">
        <v-checkbox
          v-for="searchType in searchTypes"
          :key="searchType.label"
          v-model="search.type"
          :label="searchType.label"
          :value="searchType.value"
          style="margin-right:5%;"
          color="rgba(0, 0, 0, 0.54)"
        />
      </v-col>
      <v-col cols="6" align="center">
        <v-text-field
          v-model="search.content"
          append-icon="mdi-magnify"
          label="검색어를 입력해주세요."
          single-line
        ></v-text-field>
      </v-col>
    </v-row>

    <v-data-table
      v-model="selectedPosters"
      :headers="headers"
      :items="posters"
      :search="search.content"
      :loading="loading"
      :loading-text="lodingText"
      item-key="id"
      show-select
    >
      <template v-slot:[`item.reviewStatus`]="{ item }">
        <div :class="`${getColorByReviewStatus(item.reviewStatus)}--text`">
          {{ item.reviewStatus }}
        </div>
      </template>
      <template v-slot:[`item.detail`]="{ item }">
        <v-btn small label elevation="1" style="font-weight:bold;" @click="showUpDetail(item)">
          상세정보
        </v-btn>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-chip
          small
          label
          color="green"
          text-color="white"
          class="mr-2"
          @click="showUpDialog('pend', item)"
        >
          보류
        </v-chip>
        <v-chip
          small
          label
          color="blue"
          text-color="white"
          class="mr-2"
          @click="showUpDialog('accept', item)"
        >
          승인
        </v-chip>
        <v-chip
          small
          label
          color="red"
          text-color="white"
          class="mr-2"
          @click="showUpDialog('reject', item)"
        >
          거부
        </v-chip>
      </template>
    </v-data-table>

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

    <!-- Dialog: '처리(승인/보류/미승인)' 버튼에 사용되는 dialog 입니다. -->
    <v-dialog v-model="dialog.showingUp" max-width="350">
      <v-card>
        <v-card-title class="headline">{{ dialog.title }}</v-card-title>
        <v-card-text>{{ dialog.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="confirmDialog()">확인</v-btn>
          <v-btn color="red darken-1" text @click="cancleDialog()">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUser } from '~/api/user';

export default {
  layout: 'admin/default',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      posters: [],
      selectedPosters: [],
      search: {
        type: null,
        content: null,
      },
      searchIcon: require('~/static/icon/search.svg'),
      searchTypes: [
        { label: '전체', value: 'all' },
        { label: '신규', value: 'new' },
        { label: '보류', value: 'pending' },
        { label: '미승인', value: 'deny' },
      ],
      headers: [
        {
          text: '광고 제목',
          align: 'center',
          value: 'title',
        },
        { text: '상태', value: 'reviewStatus', align: 'center' },
        { text: '시작 날짜', value: 'startedDate', align: 'center' },
        { text: '종료 날짜', value: 'finishedDate', align: 'center' },
        { text: '게시 기간', value: 'period', align: 'center' },
        { text: '상세 정보', value: 'detail', align: 'center' },
        { text: '처리', value: 'actions', sortable: false, align: 'center' },
      ],
      loading: false,
      lodingText: '데이터를 불러오는 중입니다.',
      dialog: {
        title: null,
        message: null,
        type: null,
        item: null,
        showingUp: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      fetchPosterRequests: 'posterRequest/fetchPosterRequests',
    }),
  },
  watch: {
    fetchPosterRequests() {
      this.posters = this.fetchPosterRequests.filter(
        fetchPosterRequest => fetchPosterRequest.reviewStatus !== 'APPROVAL',
      );
      this.posters = this.posters.map(fetchPosterRequest => ({
        ...fetchPosterRequest,
        reviewStatus: this.showUpReviewStatus(fetchPosterRequest.reviewStatus),
        period: this.calculatePeriod(
          fetchPosterRequest.startedDate,
          fetchPosterRequest.finishedDate,
        ),
      }));
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    async init() {
      const vm = this;
      await vm.checkAdminUser();
      await vm.read();
    },
    checkAdminUser() {
      const vm = this;
      const admin = 'ROLE_ADMIN';

      return getUser()
        .then(response => {
          vm.email = response.data.data.email;
          if (response.data.data.role !== admin) {
            vm.$router.push({ name: 'owner-login' });
          }
        })
        .catch(() => {
          vm.$router.push({ name: 'owner-login' });
        });
    },
    read() {
      this.loading = true;
      const vm = this;
      const params = {
        page: '-1',
        userEmail: null,
        isFilteredDate: false,
      };
      return vm.$store
        .dispatch('posterRequest/FETCH_LIST_V2', params)
        .then(() => (this.loading = false))
        .catch(() => (this.loading = false));
    },
    update(itemId, payload, params) {
      const vm = this;
      return vm.$store
        .dispatch('posterRequest/UPDATE_ITEM', {
          itemId,
          payload,
          params,
        })
        .then(response => vm.read())
        .catch(error => console.log(error));
    },
    async accept(itemId) {
      const reviewStatus = 'APPROVAL';
      const payload = {
        reviewStatus,
      };
      const params = {
        work: 'review',
      };
      await this.update(itemId, payload, params);
      this.clearDialog();
    },
    async pend(itemId) {
      const reviewStatus = 'PENDING';
      const payload = {
        reviewStatus,
      };
      const params = {
        work: 'review',
      };
      await this.update(itemId, payload, params);
      this.clearDialog();
    },
    async reject(itemId) {
      const reviewStatus = 'NON_APPROVAL';
      const payload = {
        reviewStatus,
      };
      const params = {
        work: 'review',
      };
      await this.update(itemId, payload, params);
      this.clearDialog();
    },
    confirmDialog() {
      if (this.dialog.item === null || this.dialog.item === undefined) {
        return;
      }

      if (this.dialog.type === 'accept') {
        this.accept(this.dialog.item.id);
      } else if (this.dialog.type === 'pend') {
        this.pend(this.dialog.item.id);
      } else if (this.dialog.type === 'reject') {
        this.reject(this.dialog.item.id);
      } else {
        this.clearDialog();
      }
    },
    clearDialog() {
      this.dialog.title = null;
      this.dialog.message = null;
      this.dialog.type = null;
      this.dialog.item = null;
      this.dialog.showingUp = false;
    },
    cancleDialog() {
      this.clearDialog();
    },
    showUpDialog(type, item) {
      this.dialog.item = item;
      this.dialog.showingUp = true;
      if (type === 'accept') {
        this.dialog.type = 'accept';
        this.dialog.title = '광고 승인 처리';
        this.dialog.message = '해당 광고를 승인하시겠습니까?';
      } else if (type === 'pend') {
        this.dialog.type = 'pend';
        this.dialog.title = '광고 보류 처리';
        this.dialog.message = '해당 광고를 보류하시겠습니까?';
      } else if (type === 'reject') {
        this.dialog.type = 'reject';
        this.dialog.title = '광고 미승인 처리';
        this.dialog.message = '해당 광고를 미승인하시겠습니까?';
      } else {
        this.clearDialog();
      }
    },
    showUpDetail(item) {
      // To do
    },
    calculatePeriod(startedDate, finishedDate) {
      const sDate = new Date(startedDate);
      const fDate = new Date(finishedDate);
      const days = (fDate - sDate) / (1000 * 3600 * 24);
      return parseInt(days / 30) + ' 개월 ' + (days % 30) + ' 일';
    },
    showUpReviewStatus(reviewStatus) {
      if (reviewStatus === 'NEW') {
        return '신규';
      } else if (reviewStatus === 'PENDING') {
        return '보류';
      } else {
        return '미승인';
      }
    },
    getColorByReviewStatus(reviewStatus) {
      if (reviewStatus === 'NEW' || reviewStatus === '신규') {
        return 'blue';
      } else if (reviewStatus === 'PENDING' || reviewStatus === '보류') {
        return 'green';
      } else {
        return 'red';
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 66px 5%;
}
.search {
  width: 100%;
  height: 84px;
  border-radius: 12px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 25px;
}
.search input[type='checkbox'] {
  transform: scale(1.3);
}
.sort input[type='checkbox'] {
  transform: scale(2);
  margin: 0 40px;
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
