<template>
  <v-container fill-height pa-0>
    <!-- Main content -->
    <v-row justify="center">
      <v-col cols="12" align="center">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img :src="poster.imagePath"></v-img>

          <v-card-title>{{ poster.title }}</v-card-title>

          <v-card-text>
            <div>
              {{ poster.description }}
            </div>
            <div>
              <v-chip
                v-for="(keyword, index) in keywords"
                :key="index"
                class="ma-2"
                small
                label
                outlined
              >
                #{{ keyword }}
              </v-chip>
            </div>
          </v-card-text>

          <v-btn target="_blank" :href="poster.siteUrl" text :style="{ color: color }">
            자세히 보기
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sub contents -->
    <!-- <v-row justify="center">
      <v-col cols="12" align="center">
        {{ posters }}
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { getPoster } from '~/api/poster';

export default {
  layout: 'main/default',
  async asyncData({ params, redirect, payload }) {
    const posterId = params.posterId;
    let poster = null;

    if (payload) {
      poster = payload;
    } else {
      poster = await getPoster(posterId)
        .then(response => {
          return response.data.data;
        })
        .catch(() => {
          redirect({ name: 'index' });
        });
    }

    const keywords = poster.keywords.split(', ');

    return { poster, keywords };
  },
  data() {
    return {
      page: 1,
      poster: null,
    };
  },
  computed: {
    ...mapGetters({
      dayMode: 'dayMode',
      posters: 'poster/fetchPosters',
    }),
    color() {
      return this.dayMode === true ? 'black' : 'black';
      // return this.dayMode === true ? 'black' : 'white';
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const params = {
        page: this.page,
        isFilteredDate: true,
        isActivated: true,
      };
      await this.$store.dispatch('poster/FETCH_LIST_V2', params);
    },
  },
  head() {
    return {
      title: `${this.poster.title} :: 광고돼지`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.poster.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.poster.keywords,
        },
      ],
    };
  },
};
</script>
