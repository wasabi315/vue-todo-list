<template>
  <v-container>
    <h1 class="mt-5 mb-10">Your todos</h1>
    <TodoCard
      v-for="(entry, i) in todos"
      :key="i"
      :entry="entry"
      @todo-complete="removeEntry(i)"
      class="my-7"
    ></TodoCard>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoCard from "@/components/TodoCard.vue";

@Component({
  components: {
    TodoCard
  }
})
export default class TodoView extends Vue {
  todos: TodoEntry[] = [
    {
      title: "foo",
      due: new Date(2019, 10, 30),
      priority: "medium",
      notes: ""
    },
    {
      title: "bar",
      due: new Date(2019, 10, 29),
      priority: "high",
      notes: "lorem ipsum"
    },
    {
      title: "baz",
      due: new Date(2019, 10, 31),
      priority: "low",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  removeEntry(i: number): void {
    this.todos.splice(i, 1);
  }
}
</script>
