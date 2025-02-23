<template>
  <div>
    filter tasks: 
    <select @change="filterTask" name="somting" id="" v-model="selected" class=" form-select-sm" >
        <option :value="option" v-for="(option,index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {tasks} from '../../../store/tasks.js'

const options = ref([5, 10 , 20 , 40 , 100])
const selected = ref()
const store = tasks()

async function filterTask(){
    await store.filterTask(selected.value)
}

</script>

<style>

</style>