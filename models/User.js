const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db/connection.js");


const User = db.define("user", {
    username: DataTypes.STRING,
    email: DataTypes.STRING
});


module.exports = User;