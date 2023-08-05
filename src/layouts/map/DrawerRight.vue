<template>
  <!-- <v-navigation-drawer v-if="$route.name == 'Map'" expand-on-hover rail permanent location="right"> -->
  <!-- <v-navigation-drawer v-model="drawer" expand-on-hover rail permanent location="right"> -->
  <v-navigation-drawer expand-on-hover rail permanent location="right">
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"></v-list-item>
      <!-- <v-switch v-model="drawer" label="" color="primary" value="primary" hide-details></v-switch> -->
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true)

</script>
