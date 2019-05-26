<template>
<div>
  <!-- <v-container fluid grid-list-xl> -->
     <v-layout wrap align-center>
    <v-flex xs12 sm6 d-flex pl-3 pt-3>
        <v-select
          :items="items"
          box
          label="Box style"
        ></v-select>
      </v-flex>
     </v-layout>
  <!-- </v-container> -->
  <v-container fluid fill-height style="display:table">
   
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-card color="primary">
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
          <v-layout pa-2 column fill-height class="lightbox">
            <v-spacer></v-spacer>
            <v-flex shrink>
              <div class="subheading">
                <span>44</span>
                <span class="align-right">2699 kd</span>
              </div>
              <div class="body-1">GenItm-03008</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm9>
        <v-card class="primary" height="100%">
          <v-card-title>
            <h4 class="align-self-start">{{ "#1" }}</h4>
            <v-spacer></v-spacer>
            <h4 class="align-self-end">{{ "Bugatti - Boty" }}</h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs9>
              <v-layout row wrap>
                <v-flex xs2>
                  <img class="align-center pt-3 pl-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text class="align-center pt-3 pl-3">asfd</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pa-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text>asfd</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pa-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text>asfd</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pa-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text>asfd</v-card-text>
                </v-flex>
                <v-flex xs2>
                  <img class="align-center pa-3" src="../assets/icon/style-fit1.svg">
                  <v-card-text>asfd</v-card-text>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-flex xs1>
                <v-card-title class="heading">Kept</v-card-title>
              </v-flex>
              <v-flex shrink>
                <div class="subheading">Lee</div>
                <v-spacer></v-spacer>
                <div class="body-1">hey</div>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
export default {
  name: "Dashboard",
  computed: {
    loginDialog: {
      get: function() {
        // return require("../json/no-");
      },
      set: function(newValue) {
        // this.$store.commit("toggleLogin", newValue);
      }
    }
  },
  data() {
    return {
      baseItems: ["no-return-box",'no-active-box',"returnable-box"],
      cards: [{
          "id":1,
          "image":"https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          "address1":"1",
          "address2":"2699 kd",
          "address3":"56454",
          "name":"Bugatti - Boty",
          "style":true,
          "fit":false,
          "price":true,
          "size":false,
          "comment":false,
          "keep":true
      }]
    };
  },
  methods: {
    async login() {
      
    }
   
  }
};
</script>

<style>
</style>
