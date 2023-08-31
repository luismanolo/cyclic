import { defineStore } from 'pinia'

export const mapStore = defineStore('mapStore', {
  state: () => ({
    jsonLayers: [
      {
        url: "https://raw.githubusercontent.com/iderioja/base_datos_geografica/master/municipios.json",
        name: "Municipios La Rioja"
      }
    ],
    baseLayers: [
      {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "",
        name: "OpenStreetMap"
      }
    ],
    wmsLayers: [
      {
        url: "https://www.ign.es/wms-inspire/pnoa-ma",
        layers: "OI.OrthoimageCoverage",
        name: "IGN Orto",
        transparent: false,
        type: "base"
      },
      {
        url: "https://www.ign.es/wms-inspire/mapa-raster",
        layers: "mtn_rasterizado",
        name: "IGN Raster",
        transparent: false,
        type: "base"
      },
      {
        url: "https://www.cartociudad.es/wms-inspire/direcciones-ccpp",
        layers: "codigo-postal",
        name: "Cod Postal",
        transparent: true,
        type: "base"
      }
    ]
  }),
  getters: {
    json: (state) => state.jsonLayers,
  },
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})

// DATA:
// Base de datos geográfica de La Rioja: https://ias1.larioja.org/iderioja/ANONIMO_INSPIRE?idSesionVirtual=1dbc9505701685997b1b216cbef790aaae448c24
//
