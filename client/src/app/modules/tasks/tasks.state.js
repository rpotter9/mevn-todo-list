
const state = {
    tasks: [],
    editMode: false
}

const mutations = {
    'SET_TASKS' (state, tasks){
        state.tasks = tasks;
    },
    'ADD_TASK' (state, task){
        state.tasks.push(task)
    },
    'UPDATE_TASK' (state, task){
        const index = state.tasks.findIndex( t => t.id == task.id);
        state.tasks.splice(index,1,task)
    },
    'DELETE_TASK' (state, task){
        const index = state.tasks.findIndex( t => t.id == task.id);
        state.tasks.splice(index,1)
    },
    'SET_EDIT_MODE' (state, editMode){
        state.editMode = editMode
    }
}

const actions = {
    initTasks: ({commit}, tasks) => {
        commit('SET_TASKS', tasks);
    },
    updateTask({commit}, task){
        commit('UPDATE_TASK', task)
    },
    async addTask({commit}, task){
        commit('ADD_TASK', task)
    },
    async addTasks ({commit}, tasks){
        tasks.forEach(task => {
            commit('ADD_TASK', task)
        })
    },
    async deleteTask({commit}, task){
        commit('DELETE_TASK', task)
    },
    async setEditMode({commit}, editMode){
        commit('SET_EDIT_MODE', editMode)
    }
}

const getters = {
    getTaskById: (state) => (id) => {
        
        return state.tasks.find( t => t.id == id)
    },
    tasks: state =>{
        return state.tasks
    },
    editMode: state =>{
        return state.editMode
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}