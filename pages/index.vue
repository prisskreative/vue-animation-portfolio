<template>
  <main>
   
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'

export default {
  components: {
    IconBase
  },
  computed: mapState(['page', 'users', 'places']),
}
</script>

<style>
.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>
main {
  padding-top: 20px;
  margin-top: 120px;
  background-color: #fafafa;
}

.places {
  img {
    float: left;
    margin: 0 15px 15px 0;
  }
  p {
    margin-top: 10px;
  }
  .location {
    padding: 10px 0;
  }
}

/* hr {
  border-top: 1px solid #ddd;
  border-bottom: none;
  margin-top: 15px;
}

.mapcontain {
  width: 35%;
  float: right;
  height: 400px;
  p {
    margin: 10px 0;
  }
} */

@media screen and (max-width: 600px) {
  /* .mapcontain {
    width: 100%;
    margin: 10px 0;
  } */
}
</style>
