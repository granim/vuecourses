<template>
  <div>
    <form>
      <div>
        <label>Name: </label>
        <input v-model="name" placeholder="Name" type="text" />
      </div>
      <div>
        <label>Phone: </label>
        <input v-model="phone" placeholder="Phone" type="tel" />
      </div>
      <div>
        <label>Email: </label>
        <input v-model="email" placeholder="email" type="email" />
      </div>
      <div>
        <button v-on:click.prevent="submitFriend">Add Friend</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                phone: '',
                email:  ''
            }
        },
        emits: {
            'add-friend': function(name, phone, email) {
                if(name, phone, email) {
                    console.log(name, phone, email)
                    return true;
                } else {
                    console.warn('Something is missing');
                    return false;
                }
            }
        },
    methods: {
        submitFriend() {
            this.$emit('add-friend', this.name, this.phone, this.email)
        }
    }
    }
</script>

<style  scoped>
</style>