<template>
  <v-card class="px-8" elevation="10">
    <v-container>
      <v-row align="center">
        <v-col sm="0.5">
          <span
            v-if="entry.priority === 'low'"
            class="cyan--text text--darken-1 font-weight-bold"
          >
            !
          </span>
          <span
            v-if="entry.priority === 'medium'"
            class="cyan--text text--darken-1 font-weight-bold"
          >
            !!
          </span>
          <span
            v-if="entry.priority === 'high'"
            class="cyan--text text--darken-1 font-weight-bold"
          >
            !!!
          </span>
        </v-col>
        <v-col sm="10">
          <v-card-title>{{ entry.title }}</v-card-title>
          <v-card-subtitle v-if="entry.due">{{ formatedDue }}</v-card-subtitle>
          <v-card-text v-if="entry.notes" class="pb-5 px-4">
            {{ entry.notes }}
          </v-card-text>
        </v-col>
        <v-spacer></v-spacer>
        <v-col sm="0.5">
          <v-btn color="green accent-3" @click="$emit('todo-complete')">
            <v-icon class="mr-1">mdi-check</v-icon>Done
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import moment from "moment";

@Component
export default class TodoCard extends Vue {
  @Prop()
  entry!: TodoEntry;

  get formatedDue() {
    return moment(this.entry.due).format("YY/MM/DD ddd");
  }
}
</script>
