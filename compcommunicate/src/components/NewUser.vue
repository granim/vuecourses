<template>
  <div>
    <input type="text" id="name" placeholder="name" v-model="name" />
    <input type="email" id="email" placeholder="email" v-model="email" />
    <input type="tel" id="phone" placeholder="phone" v-model="phone" />
    <input
      type="number"
      id="health"
      placeholder="health"
      v-model.number="health"
    />
    <button v-on:click="addUser(name, email, phone, health)">Add User</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            name: '',
            email: '',
            phone: '',
            health: 0
            }
         },
       methods: {
           addUser(){
               this.$emit('add-user', this.name, this.email, this.phone, this.health)  
           }
         
       }
    }
</script>

<style scoped>
</style>