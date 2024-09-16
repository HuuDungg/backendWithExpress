const express = require("express");
const router = express.Router();

//create route
router.get('/', function (req, res) {
    res.render("sample.ejs");
})
router.get("/test", function (req, res) {
    res.send("this is a tesst hiih")
})



module.exports = router;