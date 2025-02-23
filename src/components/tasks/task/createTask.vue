<template>
  <div class="container">
    <div class="row">
        <label for="" class=""> create a task:  </label>
            <input type="text" v-model="Cinput">
        

        <button type="button" class="btn btn-dark m-2 p-1" @click="createTask">create +</button>
   
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {tasks} from '../../../store/tasks'

const Cinput = ref('')
const store = tasks()

async function createTask(){
    if (Cinput.value != ''){
        await store.createTask(Cinput.value)
        Cinput.value = ''
    }
}

</script>

<style>

</style>