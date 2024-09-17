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

const getUserById = async (req, res) => {
    let data = req.params;
    console.log("check params:", data);

    let UserFound = await User.findOne({ _id: data.id });

    res.status(200).json({
        found: UserFound
    })

}

const updateUser = async (req, res) => {
    let data = req.body;
    console.log("check body:", data);
    let UserFound = await User.updateOne({ _id: data._id }, { name: data.name, email: data.email, city: data.city });

    res.status(200).json({
        updated: UserFound
    })
}

const deleteUserById = async (req, res) => {
    let id = req.query.id;

    await User.deleteOne({ _id: id });

    res.status(200).json({
        deleted: "deleted user by id: " + id
    })
}

module.exports = { CreateUser, getAllUser, getUserById, deleteUserById, updateUser }