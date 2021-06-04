const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const {check, validationResult} = require("express-validator")
const userController = require('../controllers/UserController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',  userController.registration)
router.post('/login', userController.login)
router.get('/check', authMiddleware, userController.check)
module.exports = router