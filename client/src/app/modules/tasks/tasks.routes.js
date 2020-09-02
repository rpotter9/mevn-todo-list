import Tasks from './Tasks.vue'


const routes = [
    {
        path: '/tasks',
        name: 'Tasks',
        components: {
            default: Tasks
        },
        meta: {
            title: 'Tasks - MEVN ToDo List'
        }
    }
    
]




export default routes;