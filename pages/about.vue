<template>
  <main>
    <div class="container">
      <div class="about">
        <h1 class="title">About Me</h1>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import AppStarRating from '~/components/AppStarRating.vue'

export default {
  components: {
    IconBase,
    AppStarRating
  },
  computed: mapState(['page', 'users', 'places'])
}
</script>

<style lang="scss" scoped>
.about{
  position: relative;
  height: 100%;
}
.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.profile-photo-secondary {
  position: absolute;
  top: 270px;
  left: 33%;
  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}
</style>