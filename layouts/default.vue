<template>
  <div >
    <app-navigation />
    <nuxt/>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>


<style>
/* common styles shared through the application */
@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,900');
html{
  background-color: #FEF7F8;
  height: 100%
}
body {
  background-color: #FEF7F8;
  color: #383147;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.2;
  position: relative;
  height: 100vh;
}

.lightPink{
  background-color: #FEF7F8;
}
.mediumPink{
  background-color: #F397AF;
}
.darkPink{
  background-color: #F3779B;
}
.darkPink-btn{
  background: transparent;
  color: #F3779B;
  border-color: #F3779B; 
}
.myPurple{
  color: #504766;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:active {
  color: white;
  text-decoration: none;
  }
a:visited {
  text-decoration: none;
  }

button {
  margin-bottom: 10px;
  background: violet;
  border: 0;
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  color: white;
  border-radius: 4px;
}

h1{
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 45px;
  font-weight: bold;
  margin-top: 3%;
  color: #504766;
}

h2{
  font-family: 'Lora', serif;
  font-style: italic;
}
h3,
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

main{
  margin: 0 auto;
  width: 94%;
  height: 100%;
}

.top {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
  padding: 0;
  margin: 30px 0 0;
}

.places {
  width: 60%;
}

aside.sidebar {
  width: 35%;
  padding: 20px;
  margin: 40px 0 0 20px;
  background: #eee;
  float: right;
}

hr {
  border-top: 1px solid #ccc;
  border-bottom: none;
  margin-top: 15px;
}

@media screen and (max-width: 1030px) {
  main {
    padding: 0 20px;
  }
}

@media screen and (max-width: 600px) {
  main {
    flex-direction: column;
  }
  .places {
    width: 100%;
  }
  aside.sidebar {
    width: 100%;
    margin: 10px 0;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* screen reader only */
.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
