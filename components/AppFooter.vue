<template>
  <v-footer
    height="auto"
  >
    <v-card
      class="lightPink flex"
      flat
      >
 
        <div class="lightPink text-md-center">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon alt"/>
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
          <font-awesome-icon :icon="['fab', 'github']" class="icon alt" />
        </div>
        <v-spacer></v-spacer>

        


      <div class="copyrights lightPink text-md-center">
        &copy;2019 — Prisskreative
      </div>
    </v-card>
  </v-footer>
</template>

<style>
v-footer {
  padding: 10px;
  color: #383147;
  letter-spacing: 0.03em;
  font-size: 10px;
  clear: both;
  position: relative;
  bottom: 0;
}

.theme--light.v-footer {
    background: transparent;
}

.copyrights{
  font-size: 10px;
}

.icon {
  color: #383147;
  margin-right: 10px;
}
</style>