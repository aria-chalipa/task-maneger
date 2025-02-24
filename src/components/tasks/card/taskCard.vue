<template>

   <div class="card"  :class="props.task.completed ? 'bg-light': ''" style="width: 18rem;">
  <div class="card-header" :class="props.task.completed ? 'line': ''">
    {{props.task.title}}
  </div>
  <ul class="list-group list-group-flush" >
    <li class="list-group-item" :class="props.task.completed ? 'bg-light': ''">  
        <button type="button" class="btn" @click="changeCompleted()">
            <i  class="bi bi-check check" :class="props.task.completed ? 'text-success': ''"></i>
       </button>
    </li>
    
    <li class="list-group-item delete w-100 p-0" :class="props.task.completed ? 'bg-light': ''">
        <button type="button" class="btn" @click="deleteTask()">
           <i class="bi bi-trash"></i>
        </button>
    </li>

  </ul>
</div>
</template>

<script setup>
import { defineProps   } from "vue";
const props = defineProps(['task', 'loading']);
import {tasks} from '../../../store/tasks.js'

const store = tasks()

function changeCompleted(){
    store.updateTask(props.task)
}

function deleteTask(){
    store.deleteTask(props.task)
}

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
.line{
    text-decoration: line-through;
}
</style>