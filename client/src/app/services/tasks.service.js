import http from './http-client';

export default {
    async getAllTasks (){

        const res = await http.get('/tasks')
        return res.data
    },
    async addTask (task){
    
        const res = await http.post('/tasks', task)
        return res.data
    },
     async deleteTask(id) {
        const res = await http.delete(`/tasks/${id}`)
    
        return res.data
    },
    async updateTask (id, task) {
        const res = await http.put(`/tasks/${id}`, task)
    
        return res.data
    },
    
}
