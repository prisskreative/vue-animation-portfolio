<template>
  <main>

    <div class="contact">
      <h1>Contact</h1>
      <p> Contact form</p>
    </div>

  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import AppStarRating from '~/components/AppStarRating.vue'

export default {
  components: {
    IconBase,
    IconMapPin,
    AppStarRating
  },
  computed: mapState(['page', 'users', 'places'])
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 45px;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.location img {
  width: 70px;
  float: left;
  margin: 0 10px 10px 0;
}

p,
.stars {
  margin: 10px 0;
}

.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.top {
  margin: 30px 0 0;
}
</style>