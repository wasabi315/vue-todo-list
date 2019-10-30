<template>
  <v-container>
    <v-row align="center">
      <v-col sm="auto">
        <h1 class="mt-5 mb-10">Your Todos</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col sm="auto">
        <TodoForm @submit="addEntry"></TodoForm>
      </v-col>
    </v-row>
    <TodoCard
      v-for="(entry, i) in todos"
      :key="i"
      :entry="entry"
      @todo-complete="removeEntry(i)"
      class="mb-7"
    ></TodoCard>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoCard from "@/components/TodoCard.vue";
import TodoForm from "@/components/TodoForm.vue";

@Component({
  components: {
    TodoCard,
    TodoForm
  }
})
export default class TodoView extends Vue {
  todos: TodoEntry[] = [];

  addEntry(entry: TodoEntry): void {
    this.todos.push(entry);
  }

  removeEntry(i: number): void {
    this.todos.splice(i, 1);
  }
}
</script>
