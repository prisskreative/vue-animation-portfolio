<template>
  <transition-group tag="div">
    <div v-for="(user, i) in users" 
      @click="changeUser(i)"
      :key="user.name" 
      :class="[user === selectedUser ? activeUser : secondaryUser, `profile-${i}`]"
      :ref="`profile${i}`"
    > 
      <img :src="user.img" />
    </div>

   <!--  <button @click="toggleFollow" :class="[following ? followclass : '', follow]" key="follow">
      <span v-if="following">&#10004; Following</span>
      <span v-else>Follow</span>
    </button> -->

    <h2 key="profile-name" class="profile-name">
      <span v-if="page === 'group'" class="user-trip">{{ selectedUser.trips[0] }}</span>
      <span v-else>{{ selectedUser.name }}</span>
    </h2>

   <!--  <aside key="aside">
      <p class="map-pin">
        <icon-base icon-name="map pin" width="18" height="18">
          <icon-map-pin />
        </icon-base>
        United States
      </p>

      <p class="calendar">
        <icon-base icon-name="calendar" width="18" height="18">
          <icon-calendar />
        </icon-base>
        {{ selectedUser.days }} days traveling
      </p>
    </aside> -->
  </transition-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import IconBase from './IconBase.vue'
import IconMail from './IconMail.vue'
import IconPlus from './IconPlus.vue'
import IconMapPin from './IconMapPin.vue'
import IconCalendar from './IconCalendar.vue'

export default {
  components: {
    IconBase,
    IconMail,
    IconPlus,
    IconMapPin,
    IconCalendar
  },
  data() {
    return {
      activeUser: 'profile-photo',
      secondaryUser: 'profile-photo-secondary'
    }
  },
  computed: {
    ...mapState(['page', 'users', 'indexedUser']),
    ...mapGetters(['selectedUser'])
  },
  methods: {
    changeUser(i) {
      this.$store.commit('changeUser', i)
      if (this.page === 'group') {
        const el = this.$refs.profile0[0]
        el.style.transform = `translate3d(${-70 +
          this.indexedUser * 55}px, -70px, 0) scale(0.25)`
      }
    },
   /*  toggleFollow() {
      if (this.following) {
        this.$store.commit('removeFollower')
      } else {
        this.$store.commit('addFollower')
      }
      this.following = !this.following
    }, */
    addPlace() {
      if (!this.saved && this.page !== 'index') {
        this.addAnimation()
        this.saved = true
      } else {
        this.removeAnimation()
        this.saved = false
      }
    },
    addAnimation() {
      //I love prettier, but it does make this animation code a lot longer and less legible than it could be :/
      const tl = new TimelineMax()

      tl.add('start')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: -360,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 0.5,
          x: -2,
          rotation: -45,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: -50,
          x: 7,
          scaleX: 3,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.fromTo(
        '.saveinfo',
        0.5,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.to(
        '.saveinfo',
        0.4,
        {
          autoAlpha: 0,
          ease: Expo.easeIn
        },
        'start+=1'
      )

      return tl
    },
    removeAnimation() {
      const tl = new TimelineMax()

      tl.add('begin')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: 0,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 1,
          x: 0,
          rotation: 0,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: 0,
          x: 0,
          scaleX: 1,
          transformOrigin: '50% 100%',
          ease: Back.easeOut
        },
        'begin'
      )

      tl.timeScale(1.2)

      return tl
    }
  }
}
</script>

<style lang="scss" scoped>
aside p {
  text-align: right;
  position: absolute;
  right: 0;
  top: 250px;
  color: white;
}

@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}

@mixin online($size, $position, $border) {
  position: absolute;
  background: #07dc3c;
  border-radius: 50% 50%;
  width: $size;
  height: $size;
  right: $position;
  bottom: $position;
  border: $border;
  opacity: 0;
}

.profile-photo {
  width: 400px;
  @include group(170px, 55%);
  img {
    border-radius: 50%;
  }
  .online {
    @include online(40px, 10px, 2px solid black);
  }
}

.profile-photo-secondary {
  @include group(270px, 33%);
  width: 200px;
  opacity: 0;
  transition: none;
  img {
    border-radius: 50% 50%;
  }
  .online {
    @include online(40px, 0px, 1px solid black);
  }
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
    cursor: pointer;
  }
}

.saveinfo {
  color: white;
  position: absolute;
  top: 194px;
  font-size: 20px;
  right: 56px;
  text-align: right;
  visibility: hidden;
  opacity: 0;
}

.profile-name {
  font-size: 35px;
  @include group(355px, 0);
}

//animations
.about, .contact {
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
    @include group(250px, 35%);
    width: 300px;
  }
  .profile-name {
    transform: translate3d(140px, -125px, 0) scale(0.75);
    color: #000;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .calendar {
    opacity: 1;
  }
}

.work {
  .follow {
    opacity: 0;
    transition: none;
  }
  .profile-photo {
    img {
      display: none;
    }
  }
  .profile-photo,
  .profile-photo-secondary {
    img:hover {
      transition: 0.2s all ease;
      border: 10px solid white;
    }
  }
  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
}

.index {
  .profile-photo {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.index .profile-photo.profile-0 {
  transform: translate3d(0, 0, 0) scale(1) !important;
}

//make the icon aligned with the avatars that are similar on mobile
@media screen and (max-width: 600px) {
  .group,
  .place {
    .side-icon {
      transform: translate3d(0, -65px, 0);
      padding: 14px 14px 12px;
    }
  }
}

.items,
.list-move {
  transition: all 0.4s ease;
}

.list-leave-active {
  position: absolute;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #a8dadc;
}

@media screen and (max-width: 600px) {
  ul,
  aside {
    display: none;
  }
}
</style>