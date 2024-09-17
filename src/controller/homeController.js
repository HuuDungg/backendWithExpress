const { createConnection } = require("../migration/connection");

const handleGetHomePage = (req, res) => {
    connection = createConnection();
    connection.query(
        'SELECT * FROM Users',
        function (err, results) {
            console.log("results: ", results)
        }
    );
    // connection.end()
    res.send(
        'test db'
    )
}

const handleTets = (req, res) => {
    // res.send("this is a cute of test")
    res.render('sample.ejs')
}

module.exports = {
    handleGetHomePage,
    handleTets
}