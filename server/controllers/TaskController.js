const Task = require('../models/Task')

class TaskController {
    async createTask(req, res){
        try {
            const {name} = req.body
            if(!name){
                return res.status(400).json({message: "You have to name your task"})
            }
            const existTask = await Task.findOne({name})
            if(existTask){
                return res. status(400).json({message: "Task is already exist"})
            }

            const task = new Task({name, user: req.user.id})
            await task.save()

            return res.status(200).json({task})
        }catch (e){
            return res.status(400).json({message: "Task creation error"})
        }
    }

    async getTasks(req, res){
        try {
            const user = req.user.id
            let tasks = await Task.find({user: user})
            return res.json(tasks);
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not get tasks from server"})
        }
    }
    async deleteTask(req, res){
        try{
            const {name} = req.body
            if(!name){
                return res.status(400).json({message: "You have to name your task"})
            }
            let task = await Task.findOne({name})
            if (!task){
                return res.status(400).json({message: "Task does not exist"})
            }
            await task.remove()

            return res.status(200).json({message: "Task deleted"})
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not delete tasks from server"})
        }
    }
}

module.exports = new TaskController()