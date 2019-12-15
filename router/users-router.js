const express           = require('express')
const fs                = require('fs')
const bcrypt            = require('bcrypt')
const saltRounds        = 7
const UserRouter        = new express.Router()
const UserModel         = require('../models/users')

UserRouter.post('/ecp-api/v1/users', (req, res) => {
    const user = new UserModel(req.body)
    let userPassword = user.password
    bcrypt.hash(userPassword, saltRounds, async (error, hash) => {
        user.password = hash

        const userValidationObj = {
            email: user.email
        }

        const userEmailValidation = await UserModel.find(userValidationObj)
        const userEmailcondition = userEmailValidation.length

        if(!userEmailcondition){
            await user.save()
            res
                .status(201)
                .send({
                    message: 'Success! New User Added',
                    status: 201,
                    user
                })
                .end()
        }else{
            res
                .status(400)
                .send({
                    message: 'user is already registered.',
                    status: 400
                })
                .end()
        }
    })
})

UserRouter.get('/ecp-api/v1/users', async (req, res) => {
    try{
        const users = await UserModel.find()
        res.send(users)
    }catch(e){
        res.status(400).send(e)
    }
})

UserRouter.get('/ecp-api/v1/user/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await UserModel.findById(_id)
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

UserRouter.delete('/ecp-api/v1/user/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await UserModel.findByIdAndDelete(_id)
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    } 
})

UserRouter.put('/ecp-api/v1/user/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await UserModel.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = UserRouter