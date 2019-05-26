<template>
  <div>
    <!-- <v-container fluid grid-list-xl> -->
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex pl-3 pt-3>
        <v-select v-model="selectedItem" :items="items" box @input="changeSetting" label="Select settings"></v-select>
      </v-flex>
    </v-layout>
    <!-- </v-container> -->
    <v-container fluid fill-height style="display:table">
      <Box :cards="filterDataSetting"/>
    </v-container>
  </div>
</template>
<script>
import Box from "./Box";
export default {
  name: "Dashboard",
  components: {
    Box
  },
  data() {
    return {
      selectedItem:"no-return-box",
      items: ["no-return-box", "no-active-box", "returnable-box"],
      filterData: [
        {
          hasPassword: true,
          hasAddress: true,
          hasSizes: true,
          hasPrices: true,
          hasPhotos: true,
          hasActiveBox: false,
          hasShippedBox: false,
          hasReturnableBox: false,
          hasFeedbackWaiting: false,
          lastBoxStarted: "2019-05-13T12:15:25.444Z"
        },
        {
          hasPassword: true,
          hasAddress: true,
          hasSizes: false,
          hasPrices: true,
          hasPhotos: true,
          hasActiveBox: false,
          hasShippedBox: false,
          hasReturnableBox: false,
          hasFeedbackWaiting: false,
          lastBoxStarted: "2019-01-05T14:32:00.000Z"
        },
        {
          hasPassword: true,
          hasAddress: true,
          hasSizes: true,
          hasPrices: true,
          hasPhotos: true,
          hasActiveBox: true,
          hasShippedBox: true,
          hasReturnableBox: true,
          hasFeedbackWaiting: false,
          lastBoxStarted: "2019-05-13T12:15:25.444Z"
        }
      ],
      cards: [
        {
          id: 1,
          image: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          address1: "1",
          address2: "2699 kd",
          address3: "56454",
          name: "Bugatti - Boty",
          style: true,
          fit: false,
          price: true,
          size: false,
          comment: false,
          keep: true
        },
        {
          id: 2,
          image: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          address1: "1",
          address2: "2699 kd",
          address3: "56454",
          name: "Bugatti - Boty",
          style: true,
          fit: false,
          price: true,
          size: true,
          comment: false,
          keep: true
        },
        {
          id: 3,
          image: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          address1: "1",
          address2: "2699 kd",
          address3: "56454",
          name: "Bugatti - Boty",
          style: false,
          fit: true,
          price: true,
          size: true,
          comment: false,
          keep: false
        }
      ],
      selectedFilterData: [{
          hasPassword: true,
          hasAddress: true,
          hasSize: true,
          hasPrices: true,
          hasPhotos: true,
          hasActiveBox: false,
          hasShippedBox: false,
          hasReturnableBox: false,
          hasFeedbackWaiting: false,
          lastBoxStarted: "2019-05-13T12:15:25.444Z"
        }],
    };
  },
  methods: {
    async changeSetting(value) {
      this.selectedFilterData = [{
          id: 2,
          image: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          address1: "1",
          address2: "2699 kd",
          address3: "56454",
          name: "Bugatti - Boty",
          style: true,
          fit: false,
          price: true,
          size: false,
          comment: false,
          keep: true
        }]
      // this.selectedFilterData = this.filterData[this.items.indexOf(value)]
      // console.log("this.selectedFilterData]====",this.selectedFilterData[0].lastBoxStarted);
    }
   
  },
  computed: {
  
     filterDataSetting: function() {
       alert("SAdfas");
     let data = this.cards.filter(async function(c) {
        //  console.log("this.selectedFilterData[0]===",this.selectedFilterData[0]);
          return await c.size === this.selectedFilterData[0].hasSize
     }.bind(this));
console.log("DAta----",data);
      return data;
    }
  }
};
</script>

<style>
</style>
