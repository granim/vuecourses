<template>
  <div>
    <h3>{{ counter }}</h3>
    <p>We do More</p>
  </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters['numbers/finalCounter'] * 2
            }
        }
    }
</script>

<style scoped>
</style>