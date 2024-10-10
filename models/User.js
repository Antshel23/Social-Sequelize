const { db, DataTypes } = require('../db/connection.js');

const User = db.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
});

module.exports = User;
