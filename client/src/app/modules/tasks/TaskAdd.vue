<template>
    <div class="container is-fullhd">
        <div class="box columns">
            <div class="field column">
                *NEW*
            </div>
            <div class="field column">
                    <b-field label="Description"></b-field>
                <b-input v-model="description"></b-input>
            </div>
            <div class="field column">
                    <b-field label="Completed?"></b-field>
                <b-checkbox v-model="completed"></b-checkbox>
            </div>
            <div class="field column">
                <b-button icon-right="pencil" @click="editTask" v-if="!editMode && !editingThisTask"></b-button>
            </div>
      
              
        </div>
              <div class="field column">
                <b-button class="is-primary" @click="saveTask">Save</b-button>
                <b-button @click="closeTask">Cancel</b-button>
            </div>
    
    </div>
</template>

<style lang="scss" scoped>
.panel{
    width: 50%;
}
</style>

<script>
import TasksService from '@/app/services/tasks.service'

export default {
    data(){
        return {
            description: '',
            completed: false
        }
    },
    computed:{
        editMode(){
            return this.$store.getters.editMode
        }
    },
    watch: {
        editingThisTask() {
            this.$store.dispatch('setEditMode', !this.editMode)
        }
    },
    methods: {
        editTask() {
            this.editingThisTask = true;
        },
        async saveTask() {

            const task = {
                description: this.description,
                completed: this.completed
            };
            
            const res = await TasksService.addTask(task)


            this.$store.dispatch('addTask', res)
            this.closeTask()

        },
        closeTask(){
            this.$emit('addMode', false)
        }
    }
}
</script>