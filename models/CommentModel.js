const Sequelize = require('sequelize');
const sequelize=require('../dbConfig');

const Comment = sequelize.define('comments', {

    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    userRole: {
        type: Sequelize.STRING,
        allowNull: false
    },

    textId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    senderEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },

    senderName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    commentText: {
        type: Sequelize.STRING(1000),
        allowNull: false
    },

    date: {
        type: Sequelize.DATE,
        allowNull: false
    }

});

module.exports = Comment;