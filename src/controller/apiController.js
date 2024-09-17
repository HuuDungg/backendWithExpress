const User = require("../model/user");

const CreateUser = (req, res) => {
    const luka = new User({
        name: 'HuuDung',
        email: "huudung2004@gmail.com",
        city: "Viet Tri"
    });
    luka.save();
    res.status(200).json(luka);
}

const getAllUser = async (req, res) => {
    const listUser = await User.find({});
    res.status(200).json({
        err: 0,
        data: listUser
    });
}

module.exports = { CreateUser, getAllUser }