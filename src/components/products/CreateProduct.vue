<template>
  <div>
    <label>create product title:
        <input type="text" class="form-controll" v-model="createInput">
        <button type="button" class="btn btn-dark" v-on:click="sendTitle">create</button>
    </label>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useProducts} from '@/store/products'
// imports

const store = useProducts()
const { addProduct } = store
const createInput = ref('');
//vars

function sendTitle() { 
    axios.post(`https://fakestoreapi.com/products`,{
        title: createInput.value
    })
    .then((res) => {
        addProduct(res.data)
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        createInput.value = ''
    });
 }

</script>

<style>

</style>