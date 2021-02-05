<template>
  <div>
    <input type="text" v-model="userName" />
    <input type="text" v-model="userAge" />
    <input type="number" v-model.number="addHealth" />
    <button v-on:click="addUser">Add a user</button>

    <ol>
      <li v-for="user in users" :key="user.name">
        {{ user.name }} : {{ user.age }} : {{ user.health }}
        <p>id: {{ user.id }}</p>
        <button v-on:click="getHealth(user.name)">Get Health</button>
      </li>
      <section>
        <ul>
          <li v-for="(num, index) in userHealth" :key="index">{{ num }}</li>
        </ul>
      </section>
    </ol>
  </div>
</template>

<script>
    export default {
        data() {
           return {
            users: [{
                    id: 1,
                    name: "Grant",
                    age: 22,
                    health: 14
                }],
        userName: '',
        userAge: '',
        addHealth: 0,
        userHealth: 0  
        }  
        },
      methods: {
        addUser() {
          const newUser = {
            id: Math.random(0,1),
            name: this.userName,
            age: this.userAge,
            health: this.addHealth
          }
          if(!this.users.find(user => user.name === newUser.name)){
             this.users.push(newUser)
          } else {
            alert("That user exist")
          }
         
        },

        getHealth(name) {
          const currentUser = this.users.find(user => user.name === name)
          this.userHealth = currentUser.health
        }
      }
    }
</script>

<style scoped>
</style>