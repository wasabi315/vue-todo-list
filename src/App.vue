<template>
  <v-app>
    <v-app-bar app elevation="0" color="transparent">
      <v-toolbar-title class="headline text-capitalize font-weight-bold">
        Todo Manager
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <TodoView />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoView from "@/components/TodoView.vue";

@Component({
  components: {
    TodoView
  }
})
export default class App extends Vue {}
</script>
