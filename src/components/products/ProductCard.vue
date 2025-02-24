<template>
  <div class="card" style="width: 18rem;">
    <img :src="product.image" class="card-img-top" :alt="product.price">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <router-link :to="{name:'singleProduct' , params:{id : product.id}}"  class="card-text m-5">{{ product.id }}</router-link>
      <router-link v-if="edit" :to="{name: 'editProduct'}"  class="btn btn-dark">edit</router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// imports

defineProps({
  product:{
      typeof : Proxy
  },
  edit:{
    typeof:Boolean
  }
})
// props




</script>

<style>

</style>