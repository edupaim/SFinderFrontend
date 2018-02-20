<template>
    <v-flex xs12>
        <v-parallax src="/src/assets/group-study-laughing.jpg" height="450">
            <v-layout
                    column
                    align-center
                    justify-center
                    class="black--text"
            >
                <h1 class="black--text mb-3 display-1 text-xs-center">Studies Finder</h1>
                <h2 class="black--text mb-1 text-xs-center">An application to find your study partner.</h2>
                <v-btn
                        class="lighten-2 mt-5"
                        dark
                        large
                        :to="'/finder'"
                >
                    Search Student
                </v-btn>
            </v-layout>
        </v-parallax>
    </v-flex>
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
