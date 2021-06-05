const Router = require('express')
const router = new Router()

const authMiddleware = require('../middleware/authMiddleware')
const taskController = require('../controllers/TaskController')

router.post('/', authMiddleware, taskController.createTask)
router.get('/', authMiddleware, taskController.getTasks)
router.post('/delete', authMiddleware, taskController.deleteTask)
module.exports = router