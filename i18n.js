const XHR = require('i18next-xhr-backend')
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const NextI18Next = require('next-i18next/dist/commonjs')

module.exports = new NextI18Next({
  localeSubpaths: 'all',
  init: [XHR],
  debug: true,
  defaultLanguage: 'zh',
  otherLanguages: ['de', 'en'],
  backend: {
    loadPath: 'https://www.reddit.com/r/reactjs.json',

    parse: JSON.parse,
  },
})
