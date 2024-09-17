const express = require("express");
const User = require("../model/user");
const { CreateUser, getAllUser } = require("../controller/apiController");
const routerApi = express.Router();
//create route api
routerApi.get('/user', getAllUser);


routerApi.post('/user', CreateUser);

module.exports = routerApi;