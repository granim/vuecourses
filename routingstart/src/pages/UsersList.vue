<template>
  <button @click="confrimInput">Confrim</button>
  <button @click="change">Save Changes</button>
  <p>{{ changesSaved }}</p>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
      return {
        changesSaved: false
      }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confrimInput() {
        //DO Something
        console.log(this);
        console.log(this.$parent)
        console.log(this.$router);
        this.$router.push('/teams');
    },
    change() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userlist Cmp before route leave')
    console.log(to, from);
    if(this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure?')
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>