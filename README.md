# pango-web

This is a repository for pango web

## 0.Setting for pango web

### 0. Create nuxt app
create-nuxt-app v2.15.0

:sparkles:  Generating Nuxt.js project in pango-web
* Project name pango-web
* Project description This is a Pango web
* Author name pigs-pango-team
* Choose programming language JavaScript
* Choose the package manager Npm
* Choose UI framework (Use arrow keys)
* Choose UI framework Vuetify.js
* Choose custom server framework None (Recommended)
* Choose Nuxt.js modules Axios
* Choose linting tools ESLint, Prettier, StyleLint
* Choose test framework Jest
* Choose rendering mode Universal (SSR)
* Choose development tools jsconfig.json (Recommended for VS Code)

### 1. ESLint & Prettier

```
// For prettier setting in .prettierrc

  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "auto",
```

```
// For eslint setting in setting.json(gloabl setting)

"eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // don't format on save
  "editor.formatOnSave": false,
```

<BR>

## 1. Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

<BR>

<HR>

## References
ESLint와 Prettier 함께 사용하기<br>
https://pravusid.kr/javascript/2019/03/10/eslint-prettier.html

Prettier 완벽 적용 (prettier 속성)<br>
https://ux.stories.pe.kr/150

아하 프론트 개발기(1) — SPA와 SSR의 장단점 그리고 Nuxt.js<br>
https://medium.com/aha-official/%EC%95%84%ED%95%98-%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-spa%EC%99%80-ssr%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nuxt-js-cafdc3ac2053

IE 호환 설정<br>
https://vue-nuxt.gitbook.io/nuxt/configuration/ie

PWA를 구성하는 기술들<br>
https://medium.com/@euncho/pwa%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%98%EB%8A%94-%EA%B8%B0%EC%88%A0%EB%93%A4-a5be57df5575
