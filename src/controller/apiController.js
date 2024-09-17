const User = require("../model/user");

const CreateUser = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    const luka = await User.create({
        name: name,
        email: email,
        city: city,
    });

    res.status(200).json({
        created: luka
    });
}

const getAllUser = async (req, res) => {
    const listUser = await User.find({});
    res.status(200).json({
        err: 0,
        data: listUser
    });
}

const getUserById = () => {

}

const deleteUserById = () => {

}

module.exports = { CreateUser, getAllUser, getUserById, deleteUserById }