<template>
  <main>

    <div class="work">
    <!--   <div v-for="place in places" class="location" :key="place.name">
        <img :src="place.img" :alt="place.name" />
        <p class="top"><strong>{{ place.name }}</strong></p>
        <p>{{ place.description }}</p>
        <hr />
      </div> -->
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
h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
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
