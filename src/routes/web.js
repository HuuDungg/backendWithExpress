const express = require("express");
const router = express.Router();
const { handleGetHomePage, handleTets, handleCreateDb, handleInsertToBlog } = require('../controller/homeController')
//create route
router.get('/', handleGetHomePage)

router.get("/test", handleTets)

router.get('/create', handleCreateDb)

router.get('/insert', handleInsertToBlog)


module.exports = router;