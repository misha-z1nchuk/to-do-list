const  bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const User = require('../models/User')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res) {
        try {
            const {email, password} = req.body
            //TODO: email and password VALIDATION
            if ((!email || !password) || password.length < 3 || password.length > 12) {
                return res.status(400).json('Incorrect email or password')
            }

            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: `User with email ${email} is already exist`})
            }


            const hashPassword = await bcrypt.hash(password, 5)
            const user = new User({email, password: hashPassword})
            await user.save()
            const token = generateJwt(user.id, email, password)

            return res.json({token})

        } catch (e) {
            console.log(e)
            res.send({message: "server error"})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if(!isPassValid){
                return res.status(400).json({message: "Invalid password"})
            }
            const token = generateJwt(user.id, email, password)

            return res.json({token})
        }catch (e)
        {
            res.send(e.message)
        }
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()