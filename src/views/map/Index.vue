<template>
  <div id="mapContainer">
    <l-map ref="map" @move="log('move')" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <!-- <l-tile-layer url="http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg" layer-type="overlay" name="Stamen Watercolor" -->
      <!--   attribution="Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>." /> -->
      <!-- <l-control-layers /> -->

      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>

      <l-tile-layer url="https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png"
        attribution="<a href='https://blog.safecast.org/about/'>SafeCast</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>"
        :min-zoom="5" :max-zoom="25" layer-type="base" name="SafeCast" />
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LControlLayers
  },
  data() {
    return {
      zoom: 14,
      center: [42.5602081, -2.7601252]
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  }
};
</script>

<style>
#mapContainer {
  width: calc(100vw - 15px);
  height: calc(100vh - 65px);
}
</style>
