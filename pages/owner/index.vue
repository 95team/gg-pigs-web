<template>
  <v-container fluid pa-0 class="notoSansFont">
    <div class="content">
      <v-row no-gutters align="center" style="margin-bottom:96px; font-size: 20px;">
        <div style="font-size: 52px; margin-right: var(--spacing-lg)">
          광고 조회하기
        </div>
        <span class="text-primary1">{{ email }}</span>
        <span class="text-light2">&nbsp;님의 광고</span>
      </v-row>

      <v-row v-if="posters.length == 0" no-gutters>
        <v-col>
          <div class="text-light2" style="font-size: 52px; text-align:center;">
            조회할 광고가 없습니다.
          </div>
        </v-col>
      </v-row>

      <!-- 광고 목록 -->
      <v-row v-else no-gutters>
        <v-col cols="4">
          <v-card flat style="width: 280px; font: normal normal bold 20px NotoSansCJKkr;">
            <div style="margin-bottom: 8px">
              <span>광고 목록</span>
            </div>
            <v-divider style="margin-bottom: 1%" />

            <v-tabs v-model="indexOfSelectedPoster" vertical color="black">
              <v-tab
                v-for="(poster, index) in posters"
                :key="poster.id"
                text-truncate
                style="justify-content:left; letter-spacing: normal;"
              >
                {{ index + 1 }}. {{ poster.title }}
              </v-tab>
            </v-tabs>
          </v-card>
        </v-col>

        <!-- 상세정보 -->
        <v-col cols="8">
          <v-card flat>
            <div>
              <v-row style="margin: 0px">
                <span style="font: normal normal bold 20px NotoSansCJKkr; margin-bottom: 8px">
                  상세정보
                </span>
                <v-spacer />
                <span
                  class="text-primary2"
                  style="font: normal normal normal 14px NotoSansCJKkr; margin-bottom: 8px"
                  >수정</span
                >
                &nbsp;
                <span
                  class="text-primary2"
                  style="font: normal normal normal 14px NotoSansCJKkr; margin-bottom: 8px"
                  >삭제</span
                >
              </v-row>
            </div>
            <v-divider style="margin-bottom: 1%" />
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                상태
              </div>
              <span class="text-light2">
                {{ isActivated }}
              </span>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                제목
              </div>
              <span class="text-light2">
                {{ title }}
              </span>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <v-col cols="4" style="padding: 0px">
                <div class="detail-item-title">
                  광고 크기
                </div>
                <span class="text-light2">
                  {{ posterType }}
                </span>
              </v-col>
              <v-col cols="4" style="padding: 0px">
                <div class="detail-item-title">
                  광고 위치
                </div>
                <span class="text-light2">
                  {{ position }}
                </span>
              </v-col>
              <v-col cols="4" style="padding: 0px">
                <div class="detail-item-title">
                  게시 기간
                </div>
                <span class="text-light2">
                  {{ period }}
                </span>
              </v-col>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <v-col cols="4" style="padding: 0px">
                <div class="detail-item-title">
                  시작 날짜
                </div>
                <span class="text-light2">
                  {{ startedDate }}
                </span>
              </v-col>
              <v-col cols="8" style="padding: 0px">
                <div class="detail-item-title">
                  종료 날짜
                </div>
                <span class="text-light2">
                  {{ finishedDate }}
                </span>
              </v-col>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                이미지
              </div>
              <span class="text-light2">
                {{ imagePath }}
              </span>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                상세정보
              </div>
              <span class="text-light2">
                {{ description }}
              </span>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                키워드
              </div>
              <span class="text-light2">
                {{ keywords }}
              </span>
            </v-row>
            <v-row style="margin-top:3.3%; margin-left:0px">
              <div class="detail-item-title">
                랜딩 페이지
              </div>
              <span class="text-light2">
                {{ siteUrl }}
              </span>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUser } from '~/api/user';

export default {
  layout: 'ownerDefault',
  data() {
    return {
      email: null,
      indexOfSelectedPoster: null,
      stringOfPosterType1: '1x1 (300 x 250)',
      stringOfPosterType2: '2x1 (300 x 516)',
      stringOfPosterType3: '3x1 (300 x 782)',
    };
  },
  computed: {
    ...mapGetters({
      posters: 'poster/fetchPosters',
    }),
    selectedPoster() {
      return this.posters[this.indexOfSelectedPoster];
    },
    isActivated() {
      if (this.selectedPoster && this.selectedPoster.isActivated) {
        if (this.selectedPoster.isActivated === 'Y') return '활성';
        else return '비활성';
      }
      return '-';
    },
    title() {
      if (this.selectedPoster && this.selectedPoster.title) return this.selectedPoster.title;
      return '-';
    },
    posterType() {
      if (this.selectedPoster && this.selectedPoster.posterType) {
        if (this.selectedPoster.posterType === 'R1') return this.stringOfPosterType1;
        else if (this.selectedPoster.posterType === 'R2') return this.stringOfPosterType2;
        else if (this.selectedPoster.posterType === 'R3') return this.stringOfPosterType3;
      }
      return '-';
    },
    position() {
      if (
        this.selectedPoster &&
        this.selectedPoster.rowPosition &&
        this.selectedPoster.columnPosition
      ) {
        let page;
        if (parseInt(this.selectedPoster.columnPosition % 6) === 0)
          page = parseInt(this.selectedPoster.columnPosition / 6) + 'P';
        else page = parseInt(this.selectedPoster.columnPosition / 6 + 1) + 'P';
        const row = String.fromCharCode(65 + parseInt(this.selectedPoster.rowPosition) - 1);
        const column = this.selectedPoster.columnPosition;
        return page + '-' + row + column;
      }
      return '-';
    },
    period() {
      if (
        this.selectedPoster &&
        this.selectedPoster.startedDate &&
        this.selectedPoster.finishedDate
      ) {
        const sDate = new Date(this.selectedPoster.startedDate);
        const fDate = new Date(this.selectedPoster.finishedDate);
        const days = (fDate - sDate) / (1000 * 3600 * 24);
        return parseInt(days / 30) + ' 개월 ' + (days % 30) + ' 일';
      }
      return '-';
    },
    startedDate() {
      if (this.selectedPoster && this.selectedPoster.startedDate)
        return this.selectedPoster.startedDate;
      return '-';
    },
    finishedDate() {
      if (this.selectedPoster && this.selectedPoster.finishedDate)
        return this.selectedPoster.finishedDate;
      return '-';
    },
    imagePath() {
      if (this.selectedPoster && this.selectedPoster.imagePath)
        return this.selectedPoster.imagePath;
      return '-';
    },
    description() {
      if (this.selectedPoster && this.selectedPoster.description)
        return this.selectedPoster.description;
      return '-';
    },
    keywords() {
      if (this.selectedPoster && this.selectedPoster.keywords) return this.selectedPoster.keywords;
      return '-';
    },
    siteUrl() {
      if (this.selectedPoster && this.selectedPoster.siteUrl) return this.selectedPoster.siteUrl;
      return '-';
    },
  },
  watch: {
    email() {
      const vm = this;
      const payload = {
        page: '-1',
        userEmail: this.email,
        isFilteredDate: 'false',
      };
      vm.$store.dispatch('poster/FETCH_LIST_V2', payload);
    },
  },
  created() {
    const vm = this;
    vm.init();
  },
  methods: {
    init() {
      const vm = this;
      if (this.email === null) {
        getUser()
          .then(response => {
            this.email = response.data.data.email;
          })
          .catch(() => {
            vm.$router.push({ name: 'owner-login' });
          });
      }
    },
  },
};
</script>

<style scoped>
.notoSansFont {
  font-family: 'Noto Sans KR', sans-serif;
}
.content {
  margin: 129px 18.3%;
}
.detail-item-title {
  font: normal normal 500 18px NotoSansCJKkr;

  width: 90px;
  margin-right: 34px;

  letter-spacing: normal;
  display: inline-block;
}
</style>
