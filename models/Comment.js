const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db/connection.js");

let Comment = db.define("profile", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});;


module.exports = Comment;