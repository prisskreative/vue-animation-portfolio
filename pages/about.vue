<template>
  <main>
    <div class="container">
      <div class="about">
        <h1>About Me</h1>
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

<style>
.theme--light.v-footer {
    background: transparent;
    position: absolute;
    bottom: 0;
    padding-left: 47%;
}
</style>

<style lang="scss" scoped>
.container{
  text-align: center; 
}

h1{
    font-size: 45px;
    margin-top: 3%;
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