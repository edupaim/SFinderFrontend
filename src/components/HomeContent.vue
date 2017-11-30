<template>
    <v-tooltip right>
        <v-btn :to="'/finder'" icon large target="_blank" slot="activator">
            <v-icon large>search</v-icon>
        </v-btn>
        <span>Search</span>
    </v-tooltip>
</template>

<script>
  export default {
    name: 'HomeContent',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
