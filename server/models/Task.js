const {model, Schema, ObjectId} = require('mongoose')

const Task = new Schema({
    name: {type: String, required:true},
    user: {type: ObjectId, ref: 'User'}
})

module.exports = model('Task', Task)