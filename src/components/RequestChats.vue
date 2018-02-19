<template>
    <v-flex xs12 sm10>
        <v-card>
            <v-list subheader>
                <v-subheader>Request chat</v-subheader>
                <v-list-tile avatar v-for="item in chats" v-bind:key="item.title" >
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn outline fab small color="green"><v-icon v-bind:color="green">thumb_up</v-icon></v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action>
                        <v-btn outline fab small color="red"><v-icon v-bind:color="red">thumb_down</v-icon></v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-flex>
</template>

<script>
  export default {
    name: 'RequestChats',
    data () {
      return {
        chats: [
          {name: 'Jason Oner', discipline: 'Cálculo A', subject: 'Limites'},
          {name: 'Ranee Carlson', discipline: 'Cálculo A', subject: 'Derivada'},
          {name: 'Cindy Baker', discipline: 'Banco de dados', subject: 'Algebra relacional'},
          {name: 'Ali Connors', discipline: 'Cálculo A', subject: 'Integral'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
