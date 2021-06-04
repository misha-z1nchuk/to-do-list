require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const authRouter = require('./routes/auth.routes')
const taskRouter = require('./routes/task.routes')
const cors = require("cors")

const PORT = process.env.PORT || 5001
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/tasks', taskRouter)

const start = async () => {
    try{
        await mongoose.connect("mongodb+srv://zenya:zenya@cluster0.08hdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

        app.listen(PORT, ()=> {
            console.log(`Server is running on ${PORT} PORT`)
        })
    }catch (e)
    {

    }
}

start()

