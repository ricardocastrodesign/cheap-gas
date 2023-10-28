<template>
  <v-container>
    <v-card
      class="gas-station-card my-2"
      variant="outlined"
      v-for="station in gasStations"
      :key="station.id"
    >
      <v-card-item>
        <v-row justify="space-between">
          <v-col cols="1">
            <v-icon size="x-small">mdi-gas-station</v-icon>
          </v-col>

          <v-col cols="auto">
            <p class="font-weight-bold">{{ station.brand }}</p>
          </v-col>

          <v-col class="pl-0">
            <p class="text-caption">{{ station.dist.toFixed(2) }} km</p>
          </v-col>

          <v-col cols="3">
            <p class="font-weight-black text-right">
              {{ station.price.toFixed(2) }} €
            </p>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["gasStations"],
};
</script>

<style scoped>
.icon {
  font-size: 24px;
}

.brand {
  font-weight: bold;
}

.distance {
  color: #888;
}

.price {
  font-weight: bold;
}
</style>
