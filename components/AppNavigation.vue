<template>
  <header :class="{  
    'index' : (page === 'index'),
    'about' : (page === 'about'),
    'work' : (page === 'work'), 
    'contact' : (page === 'contact')  
  }">

    <!-- <transition-group name="bk" tag="div" class="bk-img">
      <div key="img1" v-if="page === 'index'" class="header-img1"></div>
      <div key="img2" v-else-if="page === 'place'" class="header-img2"></div>
      <div key="img3" v-else class="header-img3"></div>
    </transition-group> -->
<div class="nav-logo">Logo</div>
    <div class="nav-wrapper">
      
      <nav>
        <ul>   
          <nuxt-link exact to="/"><li>Home</li></nuxt-link>
          <nuxt-link to="/about"><li>About</li></nuxt-link>
          <nuxt-link to="/work"><li>Work</li></nuxt-link>
          <nuxt-link to="/contact"><li>Contact</li></nuxt-link>
        </ul>

        <div @click="menuOpened = !menuOpened">
          <icon-base class="menu" icon-name="menu" icon-color="white" width="28" height="28">
            <icon-three-dot/>
          </icon-base>
        </div>

        <app-menu-drawer :menuOpened="menuOpened" />

        <app-nav-transition />

        <app-stats v-if="page === 'index'" :selectedUser="selectedUser" />
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { TimelineMax, Expo, Sine, Back } from 'gsap'
import IconBase from './IconBase.vue'
import IconThreeDot from './IconThreeDot.vue'
import AppMenuDrawer from './AppMenuDrawer.vue'
import AppNavTransition from './AppNavTransition.vue'

export default {
  data() {
    return {
      saved: false,
      menuOpened: false
    }
  },
  components: {
    IconBase,
    IconThreeDot,
    AppMenuDrawer,
    AppNavTransition
  },
  methods: {
    openMenu() {
      TweenMax.to('.first', 0.2, {
        x: 18,
        ease: Sine.easeOut
      })
      TweenMax.to('.last', 0.2, {
        x: -18,
        ease: Sine.easeOut
      })
      TweenMax.staggerTo(
        '.first, .middle, .last',
        0.2,
        {
          fill: '#7eebe6',
          ease: Sine.easeOut
        },
        0.04
      )
    },
    closeMenu() {
      TweenMax.to('.first', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.last', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.first, .middle, .last', 0.2, {
        fill: '#fff'
      })
    }
  },
  computed: {
    ...mapState(['page']),
    ...mapGetters(['selectedUser'])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  },
  watch: {
    menuOpened(val) {
      if (val) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  height: 50px;
  position: relative;
  background: #FEF7F8;
  &:before {
    content: '';
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }
  a{
    color: #383147;
  }
}

@mixin header ($imgurl) {
  /* background: url($imgurl) center center; */
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}

.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}

.bk-img {
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}

.nav-logo{
    background: #FEF7F8;
    padding: 20px 0 0 30px;
}

.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  background: rgba(4, 67, 98, 0.25);
  ul {
    float:right;
    margin-top: -30px;
  }
}

.menudrawer, .menu{
  display: none;
}


@media screen and (max-width: 1030px) {
  .nav-wrapper {
    padding: 0 10px;
  }
}

ul {
  list-style: none;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 40px;
  }
  a,
  a:active,
  a:visited {

    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  .menu, .menudrawer {
    display: block;
  }

  ul {
    display: none;
  }
}

/* .nuxt-link-active {
  font-weight: bold;
} */

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
</style>