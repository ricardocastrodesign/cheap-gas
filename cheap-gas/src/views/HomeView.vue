<template>
  <ul v-for="station in gasStations" :key="station.id">
    <li>{{ station.name }} - {{ station.price }}</li>
  </ul>
</template>

<script>
import { getGasStations } from "@/api/apiService.js"; // Import the API service

export default {
  components: {},
  data() {
    return {
      gasStations: [],
    };
  },
  mounted() {
    this.getGasStations();
  },
  methods: {
    async getGasStations() {
      const searchForm = {
        lat: 52.521,
        lng: 13.438,
        rad: 15,
        type: "diesel",
        sort: "dist",
      };
      try {
        this.gasStations = await getGasStations(searchForm);
      } catch (error) {
        console.error("Error fetching gas stations:", error);
      }
    },
  },
};
</script>
