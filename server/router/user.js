const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', (req, res) => {
    // Create a new user
    try {
        console.log(req.body);
        const user = new User(req.body)
        user.save((error, newUser) => {
            const token = user.generateAuthToken()
            res.status(201).send({ newUser, token })
        });
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/users/me', auth, async(req, res) => {
    // View logged in user profile
    res.send(req.user)
});

module.exports = router;
