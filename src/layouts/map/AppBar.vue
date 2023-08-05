<template>
  <v-app-bar dense flat>
    <v-app-bar-nav-icon @click="switchDrawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
      Vuetify Static con LeafletMap
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/map">
      <v-icon>mdi-map</v-icon>
    </v-btn>
    <v-btn icon to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon to="/auth">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
  const switchDrawer = () => {
    // this.$store.dispatch("ui/switchDrawer");
    console.log("switchDrawer pulsado");
  }
</script>
