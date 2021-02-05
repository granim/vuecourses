<template>
  <div>
    <button @click="inc">Add 1</button>
    <button @click="increase">({ value: 10 })">Increase</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        methods: {
            // addOne() {
            //     this.$store.commit('increment');
            // }
           // ...mapActions(['increment', 'increase'])
                // OR
                ...mapActions('numbers',{
                    inc: 'increment',
                    increase: 'increase'
                })
        }    
    }
</script>

<style scoped>
</style>