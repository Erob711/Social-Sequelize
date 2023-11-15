const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/connection.js");
let Like = db.define("post", {
  reactionType: DataTypes.STRING,
  createdAt: DataTypes.STRING
});

module.exports = Like;
