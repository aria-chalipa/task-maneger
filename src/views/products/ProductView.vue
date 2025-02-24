<template>
    <CreateTitle />
    <div class="mt-5">
      <div class="d-flex justify-content-center align-items-center mt-5" v-if="loading" >
          <div class="spinner-border" role="status" >
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
  
      <div v-else>
          <div class="row gap-4" >
              <ProductCard class="col-3" v-for="(produt , index) in productList" :key="index" :product="produt" />
          </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import {useProducts} from '@/store/products';
  import { storeToRefs } from 'pinia';
  import {ref} from 'vue';
  import ProductCard from '@/components/products/ProductCard.vue';
  import CreateTitle from '@/components/products/CreateProduct.vue'
  // imports
  
  const store = useProducts()
  const { setData } = store
  const { productList } = storeToRefs(store)
  //* store data
  const loading = ref(true)
  // varibles
  
  
  function fetchData(){
      axios.get('https://fakestoreapi.com/products')
           .then((res) => {
              setData(res.data)
              console.log(typeof(res))
  
           })
           .catch((err) => {
              console.log(err);
           })
           .finally(() => {
              loading.value = false;
          });
  }fetchData()
  
  
  
  </script>