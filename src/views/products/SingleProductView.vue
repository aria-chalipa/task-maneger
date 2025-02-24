<template>
 <div class="mt-5">
      <div class="d-flex justify-content-center align-items-center mt-5" v-if="loading" >
          <div class="spinner-border" role="status" >
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
  
      <div v-else>
          <div class="row gap-4" >
              <ProductCard class="col-3"  :product="product" :edit="edit" />
          </div>
      </div>


      <router-view></router-view>
      
    </div>
</template>

<script setup>
import ProductCard from '@/components/products/ProductCard.vue';
import {useProducts} from '@/store/products'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
// imports


const store = useProducts()
const { setSingleData } = store
const { product } = storeToRefs(store)
const loading = ref(true)
const route = useRoute()
const edit = ref(true)
// vars

function getSingleData(){
    axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
          .then(response => {
            setSingleData(response.data)
            loading.value = false
        }) 
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            loading.value = false
        });
    }getSingleData()

</script>
