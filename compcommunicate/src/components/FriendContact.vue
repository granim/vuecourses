<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button v-on:click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true

    },
    emailAddress: {
      type: String,
      required: true

    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // emits: [
  //   'toggle-favorite'
  // ],
  emits: {
    'toggle-favorite': function(id) {
    if(id) {
      console.log(id);
      return true;
    } else {
      console.warn('Id is missing!');
      return false;
    }
    },
    'delete-myFriend': function(id) {
     if(id) {
      console.log(id);
      return true;
    } else {
      console.warn('Id is missing!');
      return false;
    }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
     this.$emit('toggle-favorite', this.id);
    },
    deleteFriend(){
     this.$emit('delete-myfriend', this.id);
    }

  }
};
</script>