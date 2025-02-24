import axios from "axios";
import { defineStore } from "pinia";
import Swal from 'sweetalert2'


export const tasks = defineStore('tasks',{
    state: () =>{
        return{
            tasks:[],
            newTask: {},
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

        async updateTask(task){
           try{
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                id:task.id,
                title : task.title,
                completed: !task.completed
                // ersal darkhast samt server jahate update kardan
            })
            const index = this.tasks.findIndex(item => item.id === task.id)
            // peyda kardan index task e entekhab shode dar tasks

            if(index != -1){
                this.tasks.splice(index,1,response.data)
                // jaygozin kardan task entekhab shode ba task update shode
            }

            console.log(response)
           }catch(err){
            Swal.fire({
                title: "Error!",
                text: "There is a problem, please try again",
                icon: "error",
                confirmButtonText: "Ok",
                });
           }
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
                this.tasks.unshift(response.data)
                Swal.fire({
                    title: "Task created!",
                    text: "Task created successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                    timer:3000
                })
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

        async deleteTask(task){
            try{
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${task.id}`)
                console.log(response)
                const index = this.tasks.findIndex(item => item.id === task.id)
                if(index != -1){
                    this.tasks.splice(index, 1)
                }
            }catch(err){
                Swal.fire({
                    title: "Error!",
                    text: "There is a problem, please try again",   
                    icon: "error",
                    confirmButtonText: "Ok",
                })
            }
        }
            
      }
        

})