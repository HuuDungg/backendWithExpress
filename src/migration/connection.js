const { default: mongoose } = require('mongoose');

//tesst data base
require('dotenv').config();

var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];
const options = {
    dbName: 'HuuDung'
}
const createConnection = async () => {

    try {

        const c = await mongoose.connect(process.env.URL_MONGO, options);
        const state = Number(c.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db");
    } catch (error) {
        console.log(">>>erorr connection: ", error);
    }
}


exports.createConnection = createConnection;