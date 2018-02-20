<template>
    <v-container fluid>
        <v-flex>
            <v-select
                    v-bind:items="items"
                    v-model="discipline"
                    label="Selecione a disciplina"
                    single-line
                    auto
                    append-icon="book"
                    hide-details
                    class="mb-3"
            ></v-select>
            <v-spacer></v-spacer>
            <v-select
                    v-bind:items="items"
                    v-model="subject"
                    label="Selecione um assunto"
                    single-line
                    auto
                    append-icon="announcement"
                    hide-details
                    class="mb-3"
            ></v-select>
            <v-card flat class="mb-3">
                <v-card-text>
                    <v-subheader>Descrição:</v-subheader>
                    <v-container fluid>
                        <v-layout row>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis eu orci a faucibus.
                            In efficitur diam erat, non finibus elit euismod vitae.
                            Aliquam leo mi, ultricies sed urna ut, laoreet consectetur dolor.
                            Aenean ut imperdiet sem. Phasellus non ligula in libero dignissim tristique id a dolor.</span>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
            <v-flex>
                <v-btn :to="'/studiesfound'">
                    interesse
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="500">
                    <v-btn slot="activator">Sugestao de Assunto</v-btn>
                    <v-card>
                        <v-card-title class="headline">Sugestão de assunto</v-card-title>
                        <v-card-text>Selecione a disciplina e digite o assunto que sugere ser criado.</v-card-text>
                        <v-flex xs10 offset-xs1>
                        <v-select
                                xs10
                                v-bind:items="items"
                                v-model="discipline"
                                label="Selecione a disciplina"
                                single-line
                                auto
                                append-icon="book"
                                hide-details
                                class="mb-3"
                        ></v-select>
                            <v-text-field
                                    label="Assunto"
                                    v-model="name"
                                    :rules="nameRules"
                                    :counter="45"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red darken-1" flat @click.native="dialog = false">Cancelar</v-btn>
                            <v-btn color="green darken-1" flat @click.native="dialog = false">Enviar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-flex>
    </v-container>
</template>

<script>
  export default {
    name: 'Finder',
    data () {
      return {
        dialog: false,
        discipline: null,
        subject: null,
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
