<template>
    <div style="width: 100%;">
        <v-container fill-height>
            AlunoX: Ola!<br>
            AlunoB: Oi!
        </v-container>
        <v-text-field
                class="typer"
                label="Digite sua mensagem..."
                prepend-icon="send"
        ></v-text-field>
    </div>
</template>

<script>
  export default {
    name: 'Chat',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
