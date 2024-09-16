const path = require("path");
const express = require("express")
const ConfigViewEngine = (app) => {
    app.set('views', path.join('./src', 'views/'));
    app.set('views engine', 'ejs');
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = ConfigViewEngine;