module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: "~plugins/vue2-editor.js", ssr: false },
    { src: '~/plugins/fbConn.js', ssr: true }
  ],
  
  build: {
    vendor: ['vue2-editor']
  },
  css: [
    // '~/assets/css/main.css',
    // '~/node_modules/tachyons/css/tachyons.min.css',
    "tachyons/css/tachyons.min.css",
    // "tachyons-debug/css/tachyons-debug.min.css" 
  ],
}
