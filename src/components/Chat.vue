<template>
    <div style="width: 100%">
        <div class="content">
            AlunoX: Ola!<br>
            AlunoB: Oi!
        </div>
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
    .content{
        box-sizing: border-box;
        height: calc(100vh - 180px);
        overflow-y: auto;
        padding: 10px;
    }
    v-text-field {
        height: 100px;
    }
</style>
