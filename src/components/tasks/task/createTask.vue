<template>
  <div class="container">
    <div class="row">
        <label for="" class=""> create a task:  
            <input type="text" @input="validation" class="form-control w-50 d-inline" v-model="Cinput">
            <div class="form-text text-danger d-flex" v-if="valid">title is requaierd</div>
            <button type="button" class="btn btn-dark col-1 m-2 p-1" @click="createTask">
                <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                create +</button>
        </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {tasks} from '../../../store/tasks'

const Cinput = ref('')
const store = tasks()
const valid = ref(false)
const loading = ref(false)

function validation(){
    if(Cinput.value == ''){
        valid.value = true
        loading.value = false
    }else{
        valid.value = false
        
    }

}

async function createTask(){
    validation()
   
    if (Cinput.value != ''){
        loading.value =true
        await store.createTask(Cinput.value)
        Cinput.value = ''
        loading.value = false
    }

}

</script>

<style>

</style>