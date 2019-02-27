import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faLinkedin,
  faTwitter,
  faGithub 
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false