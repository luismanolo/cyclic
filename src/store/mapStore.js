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
