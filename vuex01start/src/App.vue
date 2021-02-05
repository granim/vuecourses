<template>
  <base-container v-if="isAuth" title="Vuex">
    <the-counter></the-counter>
    <input type="number" v-model.number="addTen" />
    <button v-on:click="addOne()">Add 10</button>
    <change-counter></change-counter>
    <favorite-counter></favorite-counter>
  </base-container>
  <h2>{{ loading }}</h2>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter'
import FavoriteCounter from './components/FavoriteCounter.vue'
import UserAuth from './components/UserAuth.vue';
import {mapGetters} from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
    UserAuth
  },
  data() {
    return {
      addTen: 0,
  
    }
  },

  methods : {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      })
    }
  },
   computed: {
            ...mapGetters(['isAuth'])
        },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>