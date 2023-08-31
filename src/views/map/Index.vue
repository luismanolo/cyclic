<template>
  <div id="mapContainer">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">

      <!-- WmsLayers -->
      <l-wms-tile-layer v-for="layer in wmsLayers" :url="layer.url" :transparent="layer.transparent" :name="layer.name" :layers="layer.layers" :layer-type="layer.type"></l-wms-tile-layer>

      <l-tile-layer v-for="layer in baseMapLayers" :url="layer.url" layer-type="base"
        :name="layer.name"></l-tile-layer>

      <!-- GeoJSONLayers -->
      <l-geo-json v-for="data in geojsonLayers" :options="data.options" :geojson="data.json" :name="data.name"
        layer-type="overlay">
      </l-geo-json>

      <l-control-layers :options="controlOptions" />
    </l-map>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers, LGeoJson, LWmsTileLayer} from "@vue-leaflet/vue-leaflet";
import { mapStore } from '@/store/mapStore'

const mapData = mapStore();
const { jsonLayers, baseLayers, wmsLayers } = storeToRefs(mapData);

const zoom = ref(12);
const center = ref([42.5602081, -2.7601252]);
const geojsonLayers = ref([]);
const baseMapLayers = ref([]);

const controlOptions = {
  // position: "bottomleft"
}

// const wmslayers = ref("OI.OrthoimageCoverage,OI.MosaicElement,fondo");
// const wmslayers = ref("fondo");
// https://www.ign.es/wms-inspire/mapa-raster
// const wmslayers = ref("OI.OrthoimageCoverage");

onMounted(async () => {
  console.log(`onMounted: ${window.Telegram.WebApp}`);
  // Cargamos todas las capas base
  for (const layer of baseLayers.value) {
    baseMapLayers.value.push(layer);
  }
  // Cargamos las capas json
  for (const layer of jsonLayers.value) {
    const res = await fetch(layer.url)
    const jsonData = await res.json();
    geojsonLayers.value.push({
      json: jsonData,
      name: layer.name,
      options: {
        onEachFeature: onEachFeatureJSON,
        style: {
          "color": "#ff7800",
          "weight": 5,
          "opacity": 0.65
        }
      }
    });
  }
});
const onEachFeatureJSON = (feature, layer) => {
  const defaultStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
  }
  layer.setStyle(defaultStyle);
  if (feature.properties && feature.properties.NOMBRE_MUNICIPIO) {
    layer.bindPopup(`${feature.properties.NOMBRE_MUNICIPIO} (${feature.properties.NOMBRE_PROVINCIA})`)
    layer.bindTooltip(`${feature.properties.NOMBRE_MUNICIPIO}`, { sticky: true })
  }
  layer.on('mouseout', () => {
    layer.setStyle(defaultStyle);
  })
  layer.on('mouseover', () => {
    layer.bringToFront();
    layer.setStyle({
      color: 'red'
    });
  })
  // if (feature.properties && feature.properties.NOMBRE_MUNICIPIO) {
  //   layer.bindPopup(feature.properties.NOMBRE_MUNICIPIO);
  //   layer.on('mouseover', () => { layer.openPopup(); });
  //   layer.on('mouseout', () => { layer.closePopup(); });
  // }
}
</script>

<style>
#mapContainer {
  width: calc(100vw - 15px);
  height: calc(100vh - 65px);
}
</style>
