<template>
  <div>
    <button v-if="!isAuth" v-on:click="login">Login</button>
    <button v-else v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters(['isAuth'])
        },
        methods:{
            ...mapActions(['login', 'logout'])
        }
    }
</script>

<style scoped>
</style>