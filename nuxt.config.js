module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Prisskreative - Vue animation portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vue and Nuxt animation portfolio'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Josefin+Sans|Lora:700i|Lora'
      }
    ]
  },
  plugins:  [
            '~plugins/vuetify.js', 
            '~plugins/font-awesome.js',
            '~plugins/vuelidate.js'
            ],
  css: ['~assets/app.styl'],
  router: {
    middleware: 'pages'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
  }
}
