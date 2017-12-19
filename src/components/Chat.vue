<template>
    <div style="width: 100%">
        <div class="content">
            <v-flex offset-xs1 xs7>
                <v-chip color="primary" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex xs7 offset-xs4 class="text-lg-right">
                <v-chip color="green" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex offset-xs1 xs7>
                <v-chip color="primary" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex xs7 offset-xs4 class="text-lg-right">
                <v-chip color="green" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex offset-xs1 xs7>
                <v-chip color="primary" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex xs7 offset-xs4 class="text-lg-right">
                <v-chip color="green" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex offset-xs1 xs7>
                <v-chip color="primary" text-color="white">Mensagem</v-chip>
            </v-flex>
            <v-flex xs7 offset-xs4 class="text-lg-right">
                <v-chip color="green" text-color="white">Mensagem</v-chip>
            </v-flex>
        </div>
        <v-text-field
                class="typer"
                label="Digite sua mensagem..."
                prepend-icon="send"
        ></v-text-field>
    </div>
</template>

<script>
  import VContent from 'vuetify/es5/components/VGrid/VContent'

  export default {
    components: {VContent},
    name: 'Chat',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        height: calc(100vh - 210px);
        padding: 10px;
        overflow-y: auto;
    }
</style>
