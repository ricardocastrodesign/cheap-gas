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
            <p class="text-caption">{{ station.dist }} km</p>
          </v-col>

          <v-col cols="3">
            <p class="font-weight-black text-right">{{ station.price }} €</p>
          </v-col>
          <v-col cols="auto">
            <v-btn @click="getDirections(station)" icon="mdi-directions" density="compact" variant="text">
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["gasStations"],
  methods: {
    getDirections(station) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          // const source = `${position.coords.latitude},${position.coords.longitude}`;
          const source = "52.521,13.438";
          const destination = `${station.lat},${station.lng}`;

          const url = `https://www.google.com/maps/dir/?api=1&origin=${source}&destination=${destination}`;
          window.open(url, "_blank");
        });
      } else {
        console.error("Geolocation is not available");
      }
    },
  },
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
