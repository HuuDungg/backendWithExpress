const { default: mongoose } = require("mongoose");
const blogSchema = require("../model/blog");
const Kitten = require("../model/Kitten")

const handleGetHomePage = (req, res) => {
    res.send(
        'test db'
    )
}

const handleTets = (req, res) => {
    // res.send("this is a cute of test")
    res.render('sample.ejs')
}

const handleCreateDb = (req, res) => {
    const Kitten = mongoose.model("kitten", KittenSchema);
    res.render("create success!");
}

const handleInsertToBlog = async (req, res) => {

    const mimi = new Kitten({
        name: 'doraemon'
    })
    mimi.save();
    console.log("insert complete")
    res.send("insert success")
}

module.exports = {
    handleGetHomePage,
    handleTets,
    handleCreateDb,
    handleInsertToBlog
}