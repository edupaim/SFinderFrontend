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
                <v-btn @click="find" :to="'/studiesfound'">
                    interesse
                </v-btn>
            </v-flex>
        </v-flex>
    </v-container>
</template>

<script>
  export default {
    name: 'Finder',
    data () {
      return {
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
