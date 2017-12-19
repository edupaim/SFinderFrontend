<template>
    <v-app dark>
        <toolbar v-if="matchedRoute"></toolbar>
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
    </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'

  export default {
    components: {Toolbar},
    data () {
      return {
        drawer: null
      }
    },
    computed: {
      matchedRoute () {
        switch (this.$route.name) {
          case 'Login':
            return false
          case 'Cadastro':
            return false
          default:
            return true
        }
      }
    }
  }
</script>
