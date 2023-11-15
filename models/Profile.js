const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db/connection.js");

let Profile = db.define("profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});


module.exports = Profile;