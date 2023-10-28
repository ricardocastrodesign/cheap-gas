<template>
  <GasStationList :gasStations="gasStations" />
</template>

<script>
import { getGasStations } from "@/api/apiService.js"; // Import the API service
import GasStationList from '@/components/GasStationList.vue';


export default {
  components: {
    GasStationList
  },
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
        rad: 3,
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
