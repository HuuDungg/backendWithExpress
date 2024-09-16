const express = require('express');
const path = require('path');
const app = express();
//config template engine
app.set('views', path.join(__dirname, 'views/'));
app.set('views engine', 'ejs');


//create route
app.get('/', function (req, res) {
    res.render("sample.ejs");
})
app.get("/test", function (req, res) {
    res.send("this is a tesst")
})

app.listen(8080, () => {
    console.log("server running on locallhost:8080")
})