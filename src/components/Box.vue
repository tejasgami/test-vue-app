<template>
  <div v-if="cards.length>0" >
    <v-layout row wrap v-for="card in cards" :key="`${card.id}`" mb-3> 
      <v-flex xs12 sm3>
        <v-card color="primary">
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 sm9>
        <v-card class="primary" height="100%">
          <v-card-title>
            <h4 class="align-self-start">{{ `#${card.id}` }}</h4>
            <v-spacer></v-spacer>
            <h4 class="align-self-end">{{ card.name }}</h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs9>
              <v-layout row wrap>
                <v-flex xs2>
                  <img class="align-center pt-3 pl-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text class="align-center pt-3 pl-3">STYLE</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pt-3 pl-3" src="../assets/icon/style-fit2.svg">
                  <v-card-text>FIT</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pt-3 pl-3" src="../assets/icon/price0.svg">
                  <v-card-text>PRICE</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pt-3 pl-3" src="../assets/icon/size0.svg">
                  <v-card-text>SIZE</v-card-text>
                </v-flex>
                <v-flex xs2 v-show="card.comment">
                  <img class="align-center pt-3 pl-3" src="../assets/icon/style-fit1.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-flex xs1>
                <v-card-title class="heading">{{card.keep?"Kept":"Return"}}</v-card-title>
              </v-flex>
              <v-flex shrink>
                <div class="subheading">{{card.address1}}</div>
                <v-spacer></v-spacer>
                <div class="body-1">{{card.address2}}</div>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "Box",
  props: {
    cards: Array
  },
  mounted: {},
  
};
</script>

<style>
</style>
