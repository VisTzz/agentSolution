const { sequelize } = require('../db');
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING,  defaultValue: 'USER' }
})

const Contragents = sequelize.define('contragents', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false },
    lastName: {type: DataTypes.STRING, allowNull: true }
})

module.exports = {
    User,
    Contragents
}