<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>
        
        <v-card>
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon alt"/>
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
          <font-awesome-icon :icon="['fab', 'github']" class="icon alt" />
        </v-card>
        <v-spacer></v-spacer>

        
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<style scoped>
footer {
  padding: 10px;
  color: #383147;
  text-align: center;
  letter-spacing: 0.03em;
  font-size: 10px;
  position: relative;
  margin-top: -30px;
  /* negative value of footer height */
  height: 30px;
  clear: both;
  bottom: 0;
}

a,
a:visited,
a:active {
  color: #383147;
  text-decoration: none;
  padding-left: 6px;
}
</style>