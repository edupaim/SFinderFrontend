<template>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="(chat,i) in chats" :key="i">
            <div slot="header">{{ chat.name }}</div>
            <v-card class="grey darken-2" :to="'/chat/1'">
                <v-card-text>Disciplina: {{ chat.discipline }}<br>
                    Assunto: {{ chat.subject }}</v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
  export default {
    name: 'CurrentChats',
    data () {
      return {
        chats: [
          {name: 'Jason Oner', discipline: 'Cálculo A', subject: 'Limites'},
          {name: 'Ranee Carlson', discipline: 'Cálculo A', subject: 'Derivada'},
          {name: 'Cindy Baker', discipline: 'Banco de dados', subject: ''},
          {name: 'Ali Connors', discipline: 'Cálculo A', subject: 'Integral'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
