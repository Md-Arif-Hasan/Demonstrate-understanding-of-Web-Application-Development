const { DataTypes } = require('sequelize');
const {sequelize} = require('../db.config');


const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        defaultValue: 'Untitled Post'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

(async () => {
    await Post.sync(); 
  })();

module.exports = Post;
