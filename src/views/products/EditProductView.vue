<template>
    <form @submit.prevent="changeProduct" class="form-controll d-flex justify-content-center align-itmes-center top-10">
        <label for="title">title :</label>
        <input type="text" id="title" class="" v-model="title" :placeholder="product.title">
        <label for="price">price</label>
        <input type="text" :placeholder="product.price" v-model="price">
        <button type="submit" class="btn btn-dark">change
            <span v-if="isLoading" class="spinner-border-sm"></span>
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useProducts } from '@/store/products';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';
// imports

const title = ref('');
const price = ref('')
const store = useProducts()
const {updateProduct} = store
const {product} = storeToRefs(store)
const route = useRoute()
const isLoading= ref(false)
// vars

function changeProduct(){
    isLoading.value = true
    axios.put(`https://fakestoreapi.com/products/${route.params.id}`,{
        title:title.value,
        price:price.value
    })
    .then((res) => {
        updateProduct(res.data)
        Swal.fire({
            title: 'success',
            text: 'product updated',
            icon: 'success',
            timer: 2000,
        })
    })
    .catch((err) => console.log(err))
    .finally(() => {
        isLoading.value = false
    })
    
}


</script>
