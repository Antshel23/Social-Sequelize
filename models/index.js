const User = require('./User');
const Profile = require('./Profile');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');

User.hasOne(Profile)
Profile.belongsTo(User)
User.hasMany(Post)
Post.belongsTo(User)
Post.hasMany(Comment)
Comment.belongsTo(Post)
User.hasMany(Like)
Like.belongsTo(User)

module.exports = {
    User,
    Profile,
    Post,
    Comment,
    Like
};
