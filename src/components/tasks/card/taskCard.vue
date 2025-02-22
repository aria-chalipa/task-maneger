<template>
    <div class="spinner-border" role="status" v-if="loading">
        <span class="visually-hidden">Loading...</span>
    </div>
   <div class="card" style="width: 18rem;">
  <div class="card-header">
    {{props.task.title}}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">  
        <button type="button" class="btn" @click="store.changeCompleted()">
            <i  class="bi bi-check check" :class="props.task.completed ? 'text-success': ''"></i>
       </button>
    </li>
    
    <li class="list-group-item delete">
        <button type="button" class="btn" @click="deleteTask(props.task.id)">
           <i class="bi bi-trash"></i>
        </button>
    </li>

  </ul>
</div>
</template>

<script setup>
import { defineProps , defineEmits  } from "vue";
const props = defineProps(['task', 'loading']);
const emit = defineEmits(['updateTask'])
import {tasks} from '../../../store/tasks.js'

const store = tasks()

function changeCheck(){
    emit('updateTask', props.task.completed);
    
}changeCheck()

</script>

<style scope>
.delete{
    font-size: larger;
}
button>i:hover{
    outline: none;
    cursor: pointer;
    border-bottom: red solid 1px !important;
}
.check:hover{
    font-size: larger;
    cursor: pointer;
    border-bottom: green solid 1px !important;
}

</style>