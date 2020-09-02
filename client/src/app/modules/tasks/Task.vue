<template>
    <div>
    <div class="container is-fullhd columns has-text-left">

            <div class="field column">
                {{ task.id }} 
            </div>

            <template v-if="!editingThisTask">
            <div class="field column" v-show="!editingThisTask">
                {{ task.description }}
            </div>
            <div class="field column"  v-show="!editingThisTask">
                <b-icon v-if="task.completed" icon="check"></b-icon>
                <b-icon v-else icon="close"></b-icon>
            </div>
            <div class="field column">
                <b-button icon-right="pencil" @click="editTask" v-if="!editMode && !editingThisTask"></b-button>
                <b-button icon-right="delete" @click="deleteTask" v-if="!editMode && !editingThisTask"></b-button>
            </div>
            </template>
            <template v-else>
                <div class="field column">
                    <b-input v-model="taskDescription"></b-input>
                 </div>
                   <div class="field column">
                    <b-checkbox v-model="taskCompleted"></b-checkbox>
                 </div>
                 <div class="field column"> 
                     <b-button @click="save" class="is-primary">Save</b-button>
                     <b-button @click="close">Cancel</b-button>
                     </div>
            </template>
       
    </div>
     <hr>
    </div>

</template>

<style lang="scss" scoped>
.panel{
    width: 50%;
}
</style>

<script>
import TasksService from '../../services/tasks.service'

export default {
   props: ['task'],
   data(){
       return {
           editingThisTask: false,
            taskCompleted: false,
            taskDescription: '',
        }
       
   },
   computed:{
       editMode(){
           return this.$store.getters.editMode
       }
   },
   watch: {
       editingThisTask(){
            this.$store.dispatch('setEditMode', !this.editMode)
       }
   },
   methods: {
       editTask(){
           this.editingThisTask = true;
           this.taskCompleted = this.task.completed
           this.taskDescription = this.task.description
       },
       async deleteTask(){
           const res = await TasksService.deleteTask(this.task.id)
           
           if(res){
               this.$store.dispatch('deleteTask', this.task)
           }
           
       },
       async save(){

           const data = {
                id: this.task.id,
                description: this.taskDescription,
                completed: this.taskCompleted
            }

            const res = await TasksService.updateTask(this.task.id, data)

            if(res){
                this.$store.dispatch('updateTask', data)
            }
            
            this.close()
       },
       close(){
            this.editingThisTask = false
       }
   }
}
</script>