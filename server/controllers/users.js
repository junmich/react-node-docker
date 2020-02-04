const User = require('../models/users');

const post = (request, response) => {
    try {
        console.log(request.body);
        const user = new User(request.body);
        user.save((error, newUser) => {
            const token = user.generateAuthToken();
            response.status(201).send({ newUser, token });
        });
    } catch (error) {
        response.status(400).send(error)
    }
};

const login = async (request, response) => {
    //Login a registered user
    try {
        const { email, password } = request.body;
        console.log(request.body);
        const user = await User.findByCredentials(email, password);
        console.log(user);
        if (!user) {
            return response.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
        const token = await user.generateAuthToken();
        response.send({ user, token });
    } catch (error) {
        response.status(400).send(error);
    }
};

const me = async(req, res) => {
    // View logged in user profile
    res.send(req.user)
};

module.exports = {
  post,
  login,
  me,
};