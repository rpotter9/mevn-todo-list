const { Task } = require('../../../db')

module.exports = {

     async getAllTasks (req, res) {
        try {
        
        
            const data =  await Task.findAll()
            return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send(error.message)
        }
        

    },
    async addTask (req, res) {

        try {

            const data =  await Task.create(req.body)
            return res.status(200).send(data)

        } 
        catch (error) {
            
            console.log(error)
            return res.status(500).send(error.message)
        }
        
    },
    async deleteTask (req, res) {
        try {

            if(!req.params.id)
            {
                throw new Error("ID cannot be empty!")
            }

            const id = parseInt(req.params.id);
            const data =  await Task.destroy({
                where: {
                    id: id
                }
            })
    
            return res.status(200).send(true)
        } catch (error) {
            
            return res.status(500).send(error.message)
        }
    },
    async updateTask (req, res){
        
        try {

            if(!req.params.id)
            {
                throw new Error("ID cannot be empty!")
            }

            const task = req.body

            const id = parseInt(req.params.id);
            const data =  await Task.update(task, {
                where: {
                id: id
                }
            })
    
            return res.status(200).send(true)
        } catch (error) {
            
            return res.status(500).send(error.message)
        }
    }

}
