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
//config static file
app.use(express.static(path.join(__dirname, 'public')))


//create route
app.get('/', function (req, res) {
    res.render("sample.ejs");
})
app.get("/test", function (req, res) {
    res.send("this is a tesst hiih")
})

app.listen(port, hostname, () => {
    console.log(`server running on: ${hostname}:${port}`)
})