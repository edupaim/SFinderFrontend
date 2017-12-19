<template>
    <v-container fluid>
        <v-flex xs6 offset-xs3>
            <v-text-field label="Email"
                          v-model="email"
            ></v-text-field>
            <v-text-field name="input-10-1"
                          label="Senha"
                          v-model="password"
                          min="8"
                          :append-icon="e1 ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          counter
            ></v-text-field>
            <v-btn :to="'/home'" @click="submit">entrar</v-btn>
            <v-btn :to="'/cadastro'">cadastrar</v-btn>
        </v-flex>
    </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        e1: null,
        valid: true,
        email: '',
        password: ''
      }
    },
    methods: {
      submit () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
