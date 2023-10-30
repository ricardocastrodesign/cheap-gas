<template>
  <SearchForm
    :gasStationsBrands="gasStationsBrands"
    :defaultSearchForm="defaultSearchForm"
    @submit-search="submitSearch"
  />
  <GasStationList :gasStations="gasStations" />
</template>

<script>
import { getGasStations, getGasStationsBrands } from "@/api/apiService.js";
import SearchForm from "@/components/SearchForm.vue";
import GasStationList from "@/components/GasStationList.vue";

export default {
  components: {
    SearchForm,
    GasStationList,
  },
  data() {
    return {
      gasStations: [],
      gasStationsBrands: [],
      defaultSearchForm: {
        lat: 52.521,
        lng: 13.438,
        rad: 30,
        brand: "STAR",
        type: "diesel",
        sort: "price",
      },
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.defaultSearchForm.lat = position.coords.latitude; // Assign to the data property
          this.defaultSearchForm.lng = position.coords.longitude;
          this.getGasStationsBrands(); // Fetch gas station brands
          this.getGasStations(this.defaultSearchForm); // Fetch gas stations
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
    
  },
  methods: {
    async getGasStations(searchForm) {
      try {
        this.gasStations = await getGasStations(searchForm);
      } catch (error) {
        console.error("Error fetching gas stations:", error);
      }
    },
    async getGasStationsBrands() {
      try {
        this.gasStationsBrands = await getGasStationsBrands();
      } catch (error) {
        console.error("Error fetching gas stations:", error);
      }
    },
    submitSearch(searchForm) {
      const mergedSearchForm = { ...this.defaultSearchForm, ...searchForm };

      this.getGasStations(mergedSearchForm);
    },
  },
};
</script>
