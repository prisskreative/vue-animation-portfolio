<template>
  <main>
    <div class="container">
      <div class="row content">
        <div class="col-6">
          <h1>HELLO,<br> I AM PRISCILLA,</h1>
          <h2>I am UI/UX Designer & Developer</h2>
          <p>I love to create beautiful web interfaces and make them come to life with the magic of code</p>
          <button type="button" class="btn btn-dark-pink">Resume</button>
        </div>
      </div>
    </div>
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
}
.content{
  margin-top: 9%;
  margin-left: 1%;
}
.btn-medium-pink{
  background-color: #F397AF;
}
.btn-dark-pink{
  background-color: #F3779B;
}

h2{
  font-size: 1.5rem;
  padding-bottom: 15px;
}
p{
  line-height: 1.5rem;
}

@media screen and (max-width: 600px) {
  /* .mapcontain {
    width: 100%;
    margin: 10px 0;
  } */
}
</style>
