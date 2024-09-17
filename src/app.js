const express = require('express');
const ConfigViewEngine = require('./config/viewEngine');
const app = express();
//web router
const webrouter = require('./routes/web');
const { createConnection } = require('./migration/connection');
const routerApi = require('./routes/api');

//config template engine
ConfigViewEngine(app);
//env
require('dotenv').config();
port = process.env.PORT
hostname = process.env.HOST_NAME

//define router
app.use("/api/v1", routerApi);


; (async () => {
    try {
        await createConnection();
        app.listen(port, hostname, () => {
            console.log(`server running on: ${hostname}:${port}`)
        });
    } catch (err) {
        console.log(err);
    }
})();



