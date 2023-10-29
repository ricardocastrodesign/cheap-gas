<template>
  <v-container>
    <v-form @submit.prevent="submitSearch">
      <v-select
        v-model="selectedBrand"
        :items="brands"
        label="Select Preferred Brand"
        outlined
      ></v-select>

      <v-select
        v-model="selectedFuelType"
        :items="fuelTypes"
        label="Select Fuel Type"
        outlined
      ></v-select>

      <v-btn-toggle
        v-model="sortOption"
        divided
        variant="outlined"
        class="d-flex flex-wrap mb-6"
      >
        <v-btn class="flex-1-0" value="price">Price</v-btn>
        <v-btn class="flex-1-0" value="distance">Distance</v-btn>
      </v-btn-toggle>

      <v-btn type="submit" color="primary">Search</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedBrand: null,
      selectedFuelType: null,
      sortOption: "price",
      brands: ["Aral", "Shell", "BP", "Total"],
      fuelTypes: ["E5", "E10", "Diesel", "All"],
    };
  },
  methods: {
    submitSearch() {
      const searchOptions = {
        brand: this.selectedBrand,
        fuelType: this.selectedFuelType,
        sortBy: this.sortOption,
      };
      console.log("Search Options:", searchOptions);
    },
  },
};
</script>
