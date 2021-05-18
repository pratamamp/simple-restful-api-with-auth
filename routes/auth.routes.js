const router = require('express').Router()

const Auth = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



// Register
router.post('/register', async (req, res) => {

    // if email exist
    const emailExist = await Auth.findOne({ email: req.body.email })
    if(emailExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Email already registered'
    })

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new Auth({
        username: req.body.username,
        email : req.body.email,
        password : hashPassword
    })

    try {
        const saveUser = await user.save()
        res.json(saveUser)
    } catch (err) {
        res.json({message: err})
    }
})

// Login
router.post('/login', async (req, res)=> {
    // if email exist
    const user = await Auth.findOne({ email: req.body.email })
    if(!user) return res.status(400).json({
        status: res.statusCode,
        message: 'Email not registered'
    })

    // check password
    const validPwd = await bcrypt.compare(req.body.password, user.password)
    if(!validPwd) return res.status(400).json({
        status: res.statusCode,
        message : "Wrong Password!"
    })

    // generate token jwt
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY)
    res.header('auth-token', token).json({
        token
    })
})

module.exports = router