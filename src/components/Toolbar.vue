<template>
    <div>
        <v-navigation-drawer
                clipped
                fixed
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-tile @click="" :to="'/finder'">
                    <v-list-tile-action>
                        <v-icon>search</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Search studies</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="" :to="'/currentChats'">
                    <v-list-tile-action>
                        <v-icon>chat</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Current chats</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="" :to="'/requestChats'">
                    <v-list-tile-action>
                        <v-icon>move_to_inbox
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Requests</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>account_box</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Account settings</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="dark" app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Studies Finder</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon :to="'/currentChats'">
                <v-icon>chat
                </v-icon>
            </v-btn>
            <v-btn icon :to="'/requestChats'">
                <v-icon>move_to_inbox
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    data () {
      return {
        drawer: null
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
