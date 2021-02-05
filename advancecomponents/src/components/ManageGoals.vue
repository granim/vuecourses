<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" v-model="title" />

    <button @click="saveGoal(title)">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Empty goals are not allowed.</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
    <ul>
      <li v-for="goal in goals" v-bind:key="goal">
        {{ goal }}
      </li>
    </ul>
    {{ title }}
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
    export default {
        components: {
            ErrorAlert
        },

        data() {
            return {
                inputIsInvalid: false,
                title: '',
                goals: []
            }
        },

    methods: {
        saveGoal(input){
            const enteredValue = input;
            if(enteredValue === '') {
                this.inputIsInvalid = true
            } else {
                 this.goals.push(enteredValue)
            }
        
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
    }
    
</script>

<style scoped>
</style>