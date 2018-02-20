<template>
    <v-flex xs12 sm10>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
            ></v-text-field>
            <v-text-field
                    name="input-10-1"
                    label="Senha"
                    min="8"
                    :type="'password'"
                    counter
            ></v-text-field>
            <v-text-field
                    name="input-10-1"
                    label="Repita senha"
                    min="8"
                    :type="'password'"
                    counter
            ></v-text-field>
            <v-btn
                    @click="submit"
            >
                enviar
            </v-btn>
        </v-form>
    </v-flex>
</template>

<script>
  export default {
    name: 'UserConfig',
    data () {
      return {
        email: 'email@example.com',
        nome: 'User Fulano',
        password: 'askdpokaopskd'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
