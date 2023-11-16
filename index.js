const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here


User.hasOne(Profile);
Profile.belongsTo(User);

Post.belongsTo(User);
User.hasMany(Post);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Like);
Like.hasMany(User);


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}