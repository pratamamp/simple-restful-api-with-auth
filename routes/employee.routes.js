const router = require('express').Router()
const Employee = require('../models/employee.model')
const verifyToken = require('../configs/verifyToken')
const { verify } = require('jsonwebtoken')

// Create
router.post(
    "/employee",
    verifyToken,
    async (req, res) =>{ 
        const addData = new Employee({
            name: req.body.name, 
            address:req.body.address,
            age: req.body.age
        })

        try {
            const employee = await addData.save()
            res.json(employee)
        } catch (err) {
            res.json({message: err})
        }
    }
)

// Read
router.get(
    '/employee',
    async (req, res) =>{
        try {
            const employee = await Employee.find()
            res.json(employee)
        } catch (err) {
            res.json({message: err})
        }
})

// Update
router.put(
    '/employee/:userId', 
    verifyToken,
    async(req, res)=> {
        console.log(req.params)

    // try {
    //     const userUpdate = await Employee.updateOne({_id: req.params.userId},{
    //         name: req.body.name, 
    //         address:req.body.address,
    //         age: req.body.age
    //     })
    //     res.json(userUpdate)
    // } catch (error) {
    //     res.json({message: error})
    // }
})

// Delete
router.delete(
    '/employee/:userId', 
    verifyToken,
    async (req, res)=> {
    try {
        const deleteUser = await Employee.deleteOne({_id: req.params.userId})
        res.json({message: 'User has been removed'})
    } catch (error) {
        res.json({message: error})
    }
})


module.exports = router