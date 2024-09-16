const express = require('express');
const path = require('path');
const app = express();
//config template engine
app.set('views', path.join(__dirname, 'views/'));
app.set('views engine', 'ejs');
//env
require('dotenv').config()
port = process.env.PORT
hostname = process.env.HOST_NAME

//create route
app.get('/', function (req, res) {
    res.render("sample.ejs");
})
app.get("/test", function (req, res) {
    res.send("this is a tesst")
})

app.listen(port, hostname, () => {
    console.log(`server running on: ${hostname}:${port}`)
})