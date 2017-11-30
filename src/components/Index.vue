<template>
    <div>
        <v-content>
            <v-container fluid
                         fill-height
            >
                <v-layout justify-center
                          align-center
                >
                    <router-view/>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app fixed>
            <span>&copy; 2017</span>
        </v-footer>
    </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import Router from '../router'

  export default {
    components: {Toolbar},
    name: 'Home',
    data () {
      return {}
    },
    created () {
      Router.push('')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
