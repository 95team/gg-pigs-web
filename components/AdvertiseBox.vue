<template>
  <v-container fluid class="px-3 py-6">
    <v-row no-gutters>
      <v-col v-for="n in 36" :key="n" cols="12" sm="2">
        <div class="box ma-2"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.box {
  width: 300px;
  height: 250px;
  background-color: gray;
}
</style>
