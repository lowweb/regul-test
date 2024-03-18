<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: 40.689247, lng: -74.044502 }
</script>

<template>
  <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" :center="center" :zoom="15"> </GoogleMap>
</template>
