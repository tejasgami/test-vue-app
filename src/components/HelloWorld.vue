<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <h2>Vuetify Drawer example</h2>
        <p>Showing how to set the navigation drawer into different positions and styles</p>
        <p>This took me a hour to comprehend properly, so this pen may save others some time</p>
        <p>As always, if you can do it better, then please fork it and let me know</p>
        <v-tooltip right>
          <v-btn icon large :href="source" target="_blank" slot="activator">
            <v-icon large>code</v-icon>
          </v-btn>
          <span>Source</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>

<style>
</style>
