const express = require("express");
const User = require("../model/user");
const { CreateUser, getAllUser, updateUser, getUserById, deleteUserById } = require("../controller/apiController");
const routerApi = express.Router();
//create route api
routerApi.get('/user', getAllUser);
routerApi.get('/user/:id', getUserById);
routerApi.post('/user', CreateUser);
routerApi.put('/user', updateUser);
routerApi.delete('/user', deleteUserById);


module.exports = routerApi;