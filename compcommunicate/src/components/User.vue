<template>
  <div>
    <ul>
      <li>
        <h2>{{ name }}</h2>
        <button v-on:click="showDetails">Show details</button>
      </li>
      <ul v-if="shown">
        <li><strong>Phone</strong> {{ phone }}</li>
        <li><strong>Email</strong> {{ email }}</li>
      </ul>
      <button v-on:click="toggleFavorite">Favorite</button>
      <p v-if="isGold">Favorite</p>
      <button v-on:click="$emit('delete', id)">Delete</button>
    </ul>
  </div>
</template>

<script>
    export default {
    data() {
        return{
            shown: false
        }
        },
    props: {
      id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true

    },
    email: {
      type: String,
      required: true

    },
    isGold: {
      type: Boolean,
      required: false,
      default: false
    },
    health: {
        type: Number,
        required: true
    },
    
        },
    emits: {
      'toggle-favorite': function(id) {
        if(id) {
          return true;
        } else {
          console.warn('Id is missing!');
          return false
        }
      }
    },
    methods: {
          showDetails(){
            this.shown = !this.shown;
        },
        toggleFavorite() {
          this.$emit('toggle-favorite', this.id );
        }
    }    
    }
</script>

<style scoped>
</style>