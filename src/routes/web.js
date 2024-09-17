const express = require("express");
const router = express.Router();
const { handleGetHomePage, handleTets } = require('../controller/homeController')
//create route
router.get('/', handleGetHomePage)

router.get("/test", handleTets)



module.exports = router;