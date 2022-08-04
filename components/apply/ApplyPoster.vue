<template>
  <transition name="modal">
    <div v-if="isShowApply" class="inner">
      <div class="apply-container">
        <div class="btn-close">
          <div class="close" @click="TOGGLE_APPLICATION">
            <span class="material-icons">
              close
            </span>
          </div>
        </div>
        <div class="apply-poster">광고 신청</div>
        <div class="apply-wrapper">
          <div class="apply-title">광고 크기</div>
          <div class="apply-content">
            <div class="select-wrapper">
              <select v-model="posterType">
                <option value="" selected disabled>선택</option>
                <option v-for="poster in posterTypes" :key="poster.type" :value="poster.type">
                  {{ poster.size }}
                </option>
              </select>
              <span class="material-icons">
                arrow_drop_down
              </span>
            </div>
          </div>
        </div>
        <div class="apply-wrapper">
          <div class="apply-title">게시 날짜</div>
          <div class="apply-content">
            <div class="date-wrapper" @click="isShowDate = true">
              <span class="material-icons-outlined">
                date_range
              </span>
              <span style="margin-left: 16px;">
                <span v-if="!startedDate">날짜 선택</span>
                {{ startedDate }}
              </span>
            </div>
            <div v-if="isShowDate" class="date-picker">
              <v-date-picker v-model="startedDate" @click:date="isShowDate = false"></v-date-picker>
            </div>
          </div>
        </div>
        <div class="apply-wrapper">
          <div class="apply-title">게시 기간</div>
          <div class="apply-content">
            <div class="select-wrapper">
              <select v-model="posterPeriod">
                <option value="" selected disabled>선택</option>
                <option v-for="period in posterPeriods" :key="period">
                  {{ period }}
                </option>
              </select>
              <span class="material-icons">
                arrow_drop_down
              </span>
            </div>
          </div>
        </div>
        <div class="apply-wrapper">
          <div class="apply-title">이미지 첨부</div>
          <div class="apply-content">
            <label for="poster-image" class="input-poster">
              <span class="material-icons-outlined">
                add_photo_alternate
              </span>
            </label>
            <input id="poster-image" type="file" accept="image/*" @input="INPUT_IMAGE" />
            <div class="poster-name">
              <div>{{ posterName }}</div>
            </div>
          </div>
        </div>
        <div class="apply-wrapper">
          <div class="apply-title">광고 제목</div>
          <div class="apply-content">
            <div class="title-wrapper">
              <input v-model="title" placeholder="e.g. 광고돼지" />
            </div>
          </div>
        </div>
        <div class="btn-next">
          <div class="next" @click="submit">다음</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ApplyPoster',
  data() {
    return {
      posterType: '',
      posterTypes: [
        {
          type: 'R1',
          size: '1칸 (240 x 200)',
        },
        {
          type: 'R2',
          size: '2칸 (240 x 412)',
        },
        {
          type: 'R3',
          size: '3칸 (240 x 624)',
        },
      ],
      isShowDate: false,
      startedDate: '',
      finishedDate: '',
      posterPeriod: '',
      posterPeriods: ['30일', '60일', '90일'],
      posterName: 'imageTitle.png',
      imageFile: '',
      title: '',
    };
  },
  computed: {
    ...mapState('apply', ['isShowApply']),
  },
  watch: {
    startedDate() {
      if (this.posterPeriod) {
        const startedDate = this.startedDate.split('-');
        const date = new Date(startedDate[0], startedDate[1] - 1, startedDate[2]);
        const period = parseInt(this.posterPeriod.substring(0, 2));
        date.setDate(date.getDate() + period);
        this.finishedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10);
      }
    },
    posterPeriod() {
      if (this.startedDate) {
        const startedDate = this.startedDate.split('-');
        const date = new Date(startedDate[0], startedDate[1] - 1, startedDate[2]);
        const period = parseInt(this.posterPeriod.substring(0, 2));
        date.setDate(date.getDate() + period);
        this.finishedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10);
      }
    },
  },
  methods: {
    ...mapMutations('apply', ['TOGGLE_APPLICATION']),
    INPUT_IMAGE(image) {
      const posterImage = image.target.files[0];
      this.imageFile = posterImage;
      this.posterName = posterImage.name;
    },
    async submit() {
      if (this.imageFile) {
        const formData = new FormData();
        formData.append('file', this.imageFile);
        formData.append('fileType', 'image');
        formData.append('serviceType', 'poster');
        const res = await this.$axios.post(`/api/v1/files`, formData);
        const imagePath = res.data.data;
        await this.$axios.post(`/api/v1/posters`, {
          title: this.$title,
          description: 'This is a description..',
          keywords: 'key, keyword, keywords, pigs, pp-pigs',
          posterType: this.posterType,
          imagePath,
          siteUrl: 'www.example.com',
          rowPosition: '1',
          columnPosition: '8',
          startedDate: this.startedDate,
          finishedDate: this.finishedDate,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.inner {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  .apply-container {
    position: fixed;
    max-width: 400px;
    height: 100%;
    max-height: 790px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;

    background: #ffffff;
    border-radius: 8px;
    padding: 20px;

    overflow: auto;
    .btn-close {
      display: flex;
      justify-content: flex-end;
      .close {
        width: 24px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        color: #292a2b;
      }
    }
    .apply-poster {
      display: flex;
      justify-content: center;

      margin-top: 23px;
      margin-bottom: 12px;

      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
    .apply-wrapper {
      margin-top: 16px;
      .apply-title {
        font-size: 14px;
        line-height: 18px;
        color: #4d5256;
      }
      .apply-content {
        margin-top: 4px;

        height: 64px;

        border: 1px solid #ced3d6;
        border-radius: 4px;

        font-size: 18px;
        color: #878d91;

        position: relative;
        .select-wrapper {
          width: 100%;
          height: 100%;

          position: relative;

          display: flex;
          align-items: center;
          select {
            padding: 0 28px;

            color: #878d91;

            width: 100%;
            height: 100%;

            position: relative;
            z-index: 98;

            cursor: pointer;
          }
          .material-icons {
            position: absolute;
            right: 28px;

            color: #ced3d6;
          }
        }
        .date-wrapper {
          padding: 16px;

          height: 100%;

          display: flex;
          align-items: center;

          cursor: pointer;
          .material-icons-outlined {
            color: #ff5a60;
          }
        }
        .date-picker {
          margin: 0 auto;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
        }
        .input-poster {
          border: 1px solid #ced3d6;
          border-radius: 4px;

          margin-right: 6px;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-basis: 64px;
          flex-shrink: 0;

          cursor: pointer;

          color: #ff5a60;
        }
        #poster-image {
          display: none;
        }
        .poster-name {
          border: 1px solid #ced3d6;
          border-radius: 4px;

          display: flex;
          align-items: center;
          flex-grow: 1;

          padding: 0 23px;

          overflow: hidden;
          div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .title-wrapper {
          display: flex;
          align-items: center;

          height: 100%;

          padding: 0 28px;
          input {
            width: 100%;

            color: #878d91;
          }
        }
      }
      &:nth-child(6) {
        .apply-content {
          border: 0;

          display: flex;
        }
      }
    }
    .btn-next {
      margin: 28px 0 71px;

      display: flex;
      justify-content: flex-end;
      .next {
        padding: 24px 28px 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #ff5a60;
        border-radius: 4px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        font-size: 18px;
        line-height: 20px;
        color: #ff5a60;

        cursor: pointer;
      }
    }
  }
}
</style>
