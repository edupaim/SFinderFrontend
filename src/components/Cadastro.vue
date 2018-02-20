<template>
    <v-container fluid>
        <v-flex xs6 offset-xs3>
            <v-text-field
                    label="Matricula"
                    v-model="email"
            ></v-text-field>
                <v-btn
                        @click="snackbar = true"
                        :disabled="!valid"
                >
                    enviar
                </v-btn>
            <v-btn @click="clear">limpar</v-btn>
        </v-flex>
        <v-snackbar
                :timeout="5 * 1000"
                :top="true"
                v-model="snackbar"
        >
            Confirme o cadastro através do requisição enviado ao email.
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
  export default {
    name: 'Cadastro',
    data () {
      return {
        e1: false,
        valid: true,
        email: '',
        nome: '',
        password: '',
        snackbar: false
      }
    },
    methods: {
      submit () {
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
