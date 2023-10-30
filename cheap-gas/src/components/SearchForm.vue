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
        class="text-capitalize"
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
        <v-btn class="flex-1-0" value="dist">Distance</v-btn>
      </v-btn-toggle>

      <v-btn type="submit" color="primary" block>Search</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
props: ['defaultSearchForm'],
  data() {
    return {
      selectedBrand: this.defaultSearchForm.brand,
      selectedFuelType: this.defaultSearchForm.type,
      sortOption: this.defaultSearchForm.sort,
      brands: ["Aral", "Shell", "BP", "Total"],
      fuelTypes: ["e5", "e10", "diesel", "all"],
    };
  },
  methods: {
    submitSearch() {
      const searchOptions = {
        brand: this.selectedBrand,
        type: this.selectedFuelType,
        sort: this.sortOption,
      };

      this.$emit('submit-search', searchOptions);
    },
  },
};
</script>
