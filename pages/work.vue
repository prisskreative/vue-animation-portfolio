<template>
  <main>
    <div class="work">
      <h1 class="title">My Work</h1>
      <div class="row content">
        <div
          v-for="(image, index) in images"
          :key="image.id"
          @click="activeIndex = index"
          class="col-4">
            <figure class="work-image">
              <img :src="image" :alt="image">
            </figure>
        </div>
      </div>
      <div
        v-for="(image, index) in images"
        class="modal"
        :key="image.id"
        :class="{ 'is-active': activeIndex == index }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <figure class="image is-4by3">
            <img :src="image" alt="">
          </figure>
        </div>
        <button @click="activeIndex = null" class="modal-close is-large"></button>
      </div>
    </div>

  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import AppStarRating from '~/components/AppStarRating.vue'

export default {
  data () {
    return{
      activeIndex: null,
      images: [
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400'
      ]
    }
  },
  components: {
    IconBase,
    AppStarRating
  },
  computed: mapState(['page', 'users', 'places'])
}
</script>

<style lang="scss" scoped>
.work{
  position: relative;
  min-height: 100%;
}
.work-image{
  margin: 15px 0;
}
img:hover {
  cursor: pointer;
}
</style>
