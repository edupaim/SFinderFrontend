<template>
    <v-flex xs12 sm10>
        <v-card>
            <v-subheader>Cequest chat</v-subheader>
            <v-expansion-panel>
                <v-expansion-panel-content v-for="(chat,i) in chats" :key="i">
                    <div slot="header">{{ chat.name }}</div>
                    <v-card class="grey darken-2" :to="'/chat/1'">
                        <v-card-text>Aluno A: Mensagem<br>
                            Aluno B: Mensagem
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <div slot="header">Jay Smith</div>
                    <v-card class="red lighten-1">
                        <v-card-text>Waiting response request.
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-card>
    </v-flex>
</template>

<script>
  import VContent from 'vuetify/es5/components/VGrid/VContent'

  export default {
    components: {VContent},
    name: 'CurrentChats',
    data () {
      return {
        chats: [
          {name: 'Grupo: Jason Oner, Ranee Carlson, Cindy Baker'},
          {name: 'Ranee Carlson'},
          {name: 'Cindy Baker'},
          {name: 'Ali Connors'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
