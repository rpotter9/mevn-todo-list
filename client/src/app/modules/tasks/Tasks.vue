<template>
    <div class="box">
        <h1 class="title">Tasks</h1>
            <div class="columns has-text-left">
                <div class="field column">
                    ID
                </div>
                <div class="field column">
                    Description
                </div>
                <div class="field column">
                    Completed?
                </div>
                <div class="field column">
                    Actions
                </div>
            </div>
            <div v-for="task in tasks" >
                <Task :task="task"></Task>
            </div>
            <b-button  class="is-info is-selected" icon-left="plus" @click="addNewTask" v-show="!addTask">Add new task</b-button>
            <TaskAdd v-if="addTask" v-on:addMode="addTask = $event"></TaskAdd>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from './Task'
import TaskAdd from './TaskAdd'
import TasksService from '../../services/tasks.service'

export default {
    data(){
        return{
            addTask: false,
            data: ''
        }
    },
    computed:{
        ...mapGetters({
            tasks: 'tasks'
        })
    },
    watch:{
        addTask(){
            this.$store.dispatch('setEditMode', this.addTask)
        }
    },
    methods: {
        addNewTask(){
            this.addTask = true
        },
        async getTasks(){
            const res = await TasksService.getAllTasks()
            this.$store.dispatch('initTasks', res)
        }
    },
    mounted(){
        this.getTasks()
    },
    components: {
        Task,
        TaskAdd
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";


h1.title{
    color: $primary
}
#add-task-button {
    background: $cyan;
}

</style>