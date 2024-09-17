const express = require("express");
const User = require("../model/user");
const { CreateUser, getAllUser, updateUser, getUserById, deleteUserById } = require("../controller/apiController");
const { getCustomer, getCustomerById, createCustomer, delteteCustomer, updateCustomer, uploadSingleFile } = require("../controller/customerController")
const routerApi = express.Router();
//create route api of user
routerApi.get('/user', getAllUser);
routerApi.get('/user/:id', getUserById);
routerApi.post('/user', CreateUser);
routerApi.put('/user', updateUser);
routerApi.delete('/user', deleteUserById);

//create route api of customer
routerApi.get("/customers", getCustomer);
routerApi.get("/customer", getCustomerById);
routerApi.post("/customer", createCustomer);
routerApi.post("/file", uploadSingleFile);
routerApi.put("/customer", updateCustomer);
routerApi.delete("/customer", delteteCustomer);

module.exports = routerApi;