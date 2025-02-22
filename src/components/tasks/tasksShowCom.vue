<template>
  <div class="container">
    <div class="row gap-5">
        <taskCard v-for="(task , index) in tasksList" :key="index"  :loading="loading" @updateTask="updateTask" :task="task"/>
    </div>
  </div>
</template>

<script  setup>
import taskCard from './card/taskCard.vue'
import {tasks} from '../.././store/tasks.js'
import { ref , computed } from "vue";


const store = tasks()
let tasksList = computed(() => store.allTasks);
const loading = ref(false)

async function fetchTasks() {
  loading.value = true;
  await store.fetchTasks();
  loading.value = false;
}
fetchTasks();

function updateTask(completed) {
    tasksList.value.completed = completed
    
    completed = !completed
    

}

</script>

<style>

</style>