import axios from "axios";
import { defineStore } from "pinia";
import Swal from 'sweetalert2'


export const tasks = defineStore('tasks',{
    state: () =>{
        return{
            tasks:[],
            task: {},
            loading:true,
            error:null
        }
    },
    getters:{
        allTasks(state) {
            return state.tasks
        }
    },
    actions:{
        async fetchTasks() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                this.tasks = response.data


            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "There is a problem, please try again",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }
        },

      changeCompleted(){
           this.tasks.forEach(task => {
            if(task.completed === true){
                task.completed = false 
                console.log(task.completed)
                }
                })
               
        },

        async filterTask(selected){
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${selected}`)
                    this.tasks = response.data
                    console.log(response.data)
                } 
                catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There is a problem, please try again",
                        icon: "error",
                        confirmButtonText: "Ok",
                        });
                    }
        },

        async createTask(title){
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title:title,
                    completed:false
                    })
                this.tasks.push(response.data)
                console.log(response.data)
                } 
                catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There is a problem, please try again",
                        icon: "error",
                        confirmButtonText: "Ok",
                        });
                    }
        }
            
      }
        

})