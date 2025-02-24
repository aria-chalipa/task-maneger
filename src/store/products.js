import { defineStore } from "pinia";

export const useProducts = defineStore('products',{
    state:()=>{
        return{
            productList:[],
            product:{}
        }    
    },
    getters:{
        allProducts(state) {
            return state.productList
        } 
    },
    actions:{
        setData(data){
            this.productList = data  
        },
        setSingleData(data){
            this.product = data
        },
        addProduct(data){
            this.productList.unshift(data)
        },
        updateProduct(data){
            console.log(data)
            const index = this.productList.findIndex(item => item.id === data.id)
            if(index != -1){
                this.productList.splice(index,1,data) 
                console.log(this.productList[3]) 
            }
        },

    }
})