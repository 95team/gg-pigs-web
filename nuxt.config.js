import axios from 'axios';
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import { baseApiUrl } from './api/index';

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: '광고돼지',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
        rel: 'stylesheet',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vuetify.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/color-mode',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8080',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
  },
  /*
   ** Generate configuration
   */
  generate: {
    routes() {
      const params = {
        page: -1,
        isFilteredDate: true,
        isActivated: true,
      };
      return axios.get(`${baseApiUrl}/api/v2/posters`, params).then(res => {
        return res.data.data.map(poster => {
          return {
            route: `/poster/${poster.id}/${poster.slug}`,
            payload: poster,
          };
        });
      });
    },
  },
  /*
   ** Generate sitemap
   */
  sitemap: {
    hostname: 'https://gg-pigs.com',
    exclude: [
      '/apply/**',
      '/admin/**',
      '/owner/**',
      '/owner',
      '/ownerApply1',
      '/ownerApply2',
      '/adminPageStatus',
      '/adminPageApproval',
      '/inspire',
    ],
  },

  colorMode: {
    preference: 'light',
  },
};
