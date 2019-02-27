<template>
  <main>
    <div class="container">
      <div class="row content">
        <div class="col-6">
          <h1>HELLO,<br> I AM PRISCILLA</h1>
          <h2>I am UI/UX Designer & Developer</h2>
          <p>I love to create beautiful web interfaces and <br>make them come to life with the magic of code</p>
            <div class="row">
              <div class="col-3">  
                <button type="button" class="btn darkPink"><nuxt-link to="/about">ABOUT ME</nuxt-link></button>
              </div>
              <div class="col-3">  
                <button type="button" class="btn btn-darkPink">SEE MY RESUME</button>
              </div>
            </div>
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
.theme--light.v-footer {
    background: transparent;
    position: absolute;
    bottom: 0;
    padding-left: 47%;
}
</style>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #FFFFFF;
}
h1{
  font-size: 4rem;
}
h2{
  font-size: 3.3rem;
}
main {
  padding-top: 20px;
  margin-top: 120px;
  height: 100%;
}

.content{
  margin-top: 6%;
  margin-left: 1%;
  h1{
    color: #504766;
  }
}
.btn{
  width: 130px;
}


h2{
  font-size: 1.5rem;
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
