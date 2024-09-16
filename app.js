const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World huu dung')
})
app.get("/test", function (req, res) {
    res.send("this is a tesst")
})

app.listen(3000, () => {
    console.log("server running on locallhost:3000")
})