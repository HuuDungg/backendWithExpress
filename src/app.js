const express = require('express');
const ConfigViewEngine = require('./config/viewEngine');
const app = express();
//web router
const webrouter = require('./routes/web')

//config template engine
ConfigViewEngine(app);
//env
require('dotenv').config();
port = process.env.PORT
hostname = process.env.HOST_NAME

//define router
app.use("/huudung", webrouter)
app.listen(port, hostname, () => {
    console.log(`server running on: ${hostname}:${port}`)
})
