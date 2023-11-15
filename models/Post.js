const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db/connection.js");

let Post = db.define("post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});



module.exports = Post;