<template>
  <v-dialog v-model="visible" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" @click="$refs.form.reset()">+ Add Todo</v-btn>
    </template>
    <v-card class="pa-8">
      <v-card-title>
        <span class="headline">Add Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form">
            <v-text-field label="title" v-model="title" required></v-text-field>
            <v-text-field label="due" v-model="due"></v-text-field>
            <v-select
              :items="['low', 'medium', 'high']"
              label="priority"
              v-model="priority"
            ></v-select>
            <v-textarea label="notes" v-model="notes"></v-textarea>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-on="on" class="px-5 mr-3" @click="visible = false">
          Close
        </v-btn>
        <v-btn v-on="on" class="px-5" color="green accent-3" @click="onSubmit">
          <v-icon>mdi-save</v-icon>Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Watch } from "vue-property-decorator";

@Component
export default class TodoForm extends Vue {
  visible: boolean = false;

  title?: string;
  due?: Date;
  priority?: TodoPriority;
  notes?: string;

  @Emit("submit")
  onSubmit(): TodoEntry {
    this.visible = false;
    return {
      title: this.title || "Your new todo",
      due: this.due,
      priority: this.priority,
      notes: this.notes
    };
  }
}
</script>
