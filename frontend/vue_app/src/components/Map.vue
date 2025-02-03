<template>
   
      <l-map 
        ref="map_stores" 
        v-model:zoom="zoom" 
        v-model:center="center" 
        :bounds="bounds" 
        @ready="start()" 
        style="height:100%;width:100%;background:white;"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          :opacity="0.6"
        />
        <l-marker v-for="marker in markers" :lat-lng="marker.lat_lng">
          <l-tooltip>
            {{marker.Store}}<br />
            Spent: {{ marker.total }}
          </l-tooltip>
        </l-marker>
        <l-circle 
          v-for="marker in markers" 
          :lat-lng="marker.lat_lng" 
          :radius="marker_size(marker)" 
          color="green">
        </l-circle>
    
      </l-map>

</template>
  
<script>
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker, LTooltip, LCircle } from "@vue-leaflet/vue-leaflet";
  
  export default {
    name: "Map",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LCircle,
      LTooltip,
    },
    props: {
      markers: {
        type: Array,
        default: [{lat_lng: [-33.9072222, 151.1711111], size: 10}],
      },
    },
    data() {
      return {
        zoom: 5,
        center: [-33.4072222, 151.1711111],
        bounds: [[-33.1072222, 151.1711111], [-33.7307396, 151.154055]],
        marker_scaler: 1,
        started: false,
      };
    },
    computed: {
      // marker_scaler() {
      //   const sizes = this.markers.map(e =>  e.size );
      //   return 250 / Math.max(...sizes);
      // },
      // lat_min() {
      //   return Math.min(...this.markers.map(e => e.lat_lng[0] ));
      // },
      // lat_max() {
      //   return Math.max(...this.markers.map(e => e.lat_lng[0] ));
      // },
      // lng_min() {
      //   return Math.min(...this.markers.map(e => e.lat_lng[1] ));
      // },
      // lng_max() {
      //   return Math.max(...this.markers.map(e => e.lat_lng[1] ));
      // },
      // // center_() {
      // //   return [(this.lat_min + this.lat_max) / 2, (this.lng_min + this.lng_max) / 2];
      // // },
      // bounds() {
      //   return [[this.lat_min, this.lng_min], [this.lat_max, this.lng_max]];
      // },
    },
    methods: {
      marker_size(marker) {
        return this.marker_scaler * marker.size;
      },
      start() {
        this.started = true;
        const lats = this.markers.map(e => e.lat_lng[0] ).filter(e => !Number.isNaN(e)),
            lat_min = Math.min(...lats), lat_max = Math.max(...lats);

          const lngs = this.markers.map(e => e.lat_lng[1] ).filter(e => !Number.isNaN(e)),
            lng_min = Math.min(...lngs), lng_max = Math.max(...lngs);

          const sizes = this.markers.map(e =>  e.size ),
            size_max = Math.max(...sizes);

          this.marker_scaler = 250 / size_max;
          // this.center = [(lat_min + lat_max) / 2, (lng_min + lng_max) / 2];
          this.bounds = [[lat_min, lng_min], [lat_max, lng_max]];

          console.log('start: ', this.markers, this.bounds);
       //  this.$refs.map_stores.leafletObject.panTo(this.center);
          this.$refs.map_stores.leafletObject.fitBounds(this.bounds, {padding:[10,10]});
      }
    },
    watch: {
      markers: {
        handler(val, oldVal) {
          if (this.started) { console.log("markers changed", this.markers); this.start() };
        },
        deep: true,
      },
    },
    mounted() {
    },
    updated() {

    },
    }
  
  </script>
  
  <style></style>