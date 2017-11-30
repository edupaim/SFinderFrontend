<template>
    <v-container fluid>
        <v-card>
            <v-toolbar>
                <v-toolbar-title class="text-xs-center">Studies Founds</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-tile avatar v-for="student in studiesFound" v-bind:key="student.title" @click="dialog = true">
                    <v-list-tile-avatar>
                        <v-icon>{{ student.icon }}</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="student.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>chat_bubble</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <v-dialog v-model="dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline">Deseja solicitar um bate papo com o estudante?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green" flat="flat" @click="dialog = false; snackbar = true">Sim</v-btn>
                            <v-btn color="red" flat="flat" @click="dialog = false">Não</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-snackbar
                        :timeout="5 * 1000"
                        :top="true"
                        v-model="snackbar"
                >
                    Solicitação enviada!
                    <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
                </v-snackbar>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    name: 'StudiesFound',
    data () {
      return {
        dialog: false,
        snackbar: false,
        studiesFound: [
          {name: 'Jason Oner', icon: 'account_circle'},
          {name: 'Ranee Carlson', icon: 'account_circle'},
          {name: 'Cindy Baker', icon: 'account_circle'},
          {name: 'Ali Connors', icon: 'account_circle'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
