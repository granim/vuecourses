<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-friend="addFriend"> </new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-myfriend="deleteAfriend"
      >
      </friend-contact>
    </ul>
    <section>
      <new-user @add-user="addUser"></new-user>

      <user-com
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :phone="user.phone"
        :email="user.email"
        :isGold="user.isGold"
        :health="user.health"
        @toggle-favorite="toggleFavoriteState(user.id)"
        @delete="deleteUser"
      ></user-com>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
 
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
     users: [
       {
         id: Math.random(0,1),
         name: "Grant Mur",
         phone: "123 4332",
         email: "g@gmail.com",
         isGold: false,
         health: 14
       }
     ]
    };
  },
  methods: {
      toggleFavoriteStatus(friendId){
         const identifiedFriend = this.friends.find(friend => friend.id === friendId);
         identifiedFriend.isFavorite = !identifiedFriend.isFavorite

      },
      addFriend(name, phone, email){
        console.log(name, phone, email)
        if(name, phone, email) {
          const friend = {
          id: name,
          name: name,
          phone: phone,
          email: email,
          isFavorite: false
        } 
        this.friends.push(friend);
        } else {
          console.log('Sorry invalid input')
          return
        }
        
      },
      toggleFavoriteState(userId){
        const user = this.users.find(u => u.id === userId);
        user.isGold = ! user.isGold
      },
      deleteAfriend(friendId){
        this.friends = this.friends.filter(friend => friend.id !== friendId);
      
      },
      deleteUser(userId){
        this.users = this.users.filter(user => user.id !== userId)
      },
    addUser(name, phone, email, health){
      const newUser = {
        id: Math.random(0,1),
        name,
        phone,
        email,
        isgold: false,
        health,
      }
      this.users.push(newUser);
    }
     }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>