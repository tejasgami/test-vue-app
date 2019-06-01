<template>
  <div>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex pl-3 pt-3>
        <v-select
          v-model="selectedItem"
          :items="items"
          box
          @change="onChangeSetting($event)"
          label="Select settings"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-container fill-height style="display:table">
      <div v-if="cards.length>0">
        <v-layout row wrap v-for="card in getFilterData" :key="`${card.id}`" mb-4>
          <v-flex xs12 sm3>
            <v-card>
              <v-img
                :aspect-ratio="16/12"
                :src=card.image>
              </v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm9>
            <v-card height="100%">
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
                      <img v-show="!card.style" class="align-center pt-3 pl-3" src="../assets/icon/style-fit-1.svg">
                      <img v-show="card.style" class="align-center pt-3 pl-3" src="../assets/icon/style-fit-2.svg">
                      <v-card-text class="align-center ml-1 pt-3 pl-3">STYLE</v-card-text>
                    </v-flex>
                    <v-flex xs2>
                      <img v-show="card.fit" class="align-center pt-3 pl-3" src="../assets/icon/style-fit2.svg">
                      <img v-show="!card.fit" class="align-center pt-3 pl-3" src="../assets/icon/style-fit2.svg">
                      <v-card-text class="ml-3">FIT</v-card-text>
                    </v-flex>
                    <v-flex xs2>
                      <img v-show="card.price" class="align-center pt-3 pl-3" src="../assets/icon/price0.svg">
                      <img v-show="!card.price" class="align-center pt-3 pl-3" src="../assets/icon/price-2.svg">
                      <v-card-text class="ml-2">PRICE</v-card-text>
                    </v-flex>
                    <v-flex xs2>
                      <img v-show="card.size" class="align-center pt-3 pl-3" src="../assets/icon/size0.svg">
                      <img v-show="!card.size" class="align-center pt-3 pl-3" src="../assets/icon/size-1.svg">
                      <v-card-text class="ml-2">SIZE</v-card-text>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs3>
                  <v-flex xs1>
                    <v-card-title class="heading font-weight-bold ml-3">{{card.keep?"Kept":"Return"}}</v-card-title>
                  </v-flex>
                  <v-flex shrink>
                    <div class="subheading ml-5">{{card.address1}}</div>
                    <v-spacer></v-spacer>
                    <div class="body-1 ml-4">{{card.address2}}</div>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>
<script>
import { constants } from "crypto";
import Cards from "../assets/Cards";
import Filters from "../assets/Filters";

export default {
  name: "Dashboard",
  data() {
    return {
      selectedItem: "no-return-box",
      items: ["no-return-box", "no-active-box", "returnable-box"],
      filterData: Filters,
      cards: [],
      selectedFilterData: {
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
    };
  },
  methods: {
    onChangeSetting(value) {
      this.selectedFilterData = this.filterData[this.items.indexOf(value)];
    },
    setCardData() {
      this.cards = Cards;
    }
  },
  created() {
    this.setCardData();
  },
  computed: {
    getFilterData() {
      let cardData = this.cards.filter(item => {
        for (let key in this.selectedFilterData) {
          if (this.selectedItem === "returnable-box") {
            if (key === "hasReturnableBox") {
              if (
                item["keep"] === undefined ||
                item["keep"] !== this.selectedFilterData[key]
              )
                return false;
            }
          } else if (this.selectedItem === "no-active-box") {
            if (key === "hasActiveBox") {
              if (
                item["active"] === undefined ||
                item["active"] !== this.selectedFilterData[key]
              )
                return false;
            }
          } else if (this.selectedItem === "no-return-box") {
            if (key === "hasReturnableBox") {
              if (
                item["active"] === undefined ||
                item["active"] === this.selectedFilterData[key]
              )
                return false;
            }
          }
        }
        return true;
      });
      return cardData;
    }
  }
};
</script>

<style>
</style>
