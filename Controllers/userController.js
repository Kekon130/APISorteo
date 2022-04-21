const User = require('../Models/UserModel');

function createUser(req, res) {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        return res.status(200).send(userInfo);
    });
}
// Utilizamos el user de telegram para buscar
function getUser(req, res) {
    User.findOne(req.query, (err, user) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.send(user);
    });
}

function updateUser(req, res) {
    User.findOneAndUpdate(req.query, (err, userUpdated) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.status(200).send(userUpdated);
    });
}

function deleteUser(req, res){
    User.findOneAndDelete(req.query, (err, userDeleted) => {
        if (err) {
            return req.status(400).send(err.message);
        }
        return req.status(200).send(userDeleted);
    });
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};