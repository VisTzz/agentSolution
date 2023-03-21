const { sequelize } = require('../db');
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING,  defaultValue: 'USER' },
    partyId: {type: DataTypes.INTEGER, allowNull: true},
})

const Contragents = sequelize.define('contragents', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.STRING, allowNull: true },
})

const Parties = sequelize.define('party', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.STRING, allowNull: true },
    type: {type: DataTypes.STRING, allowNull: true }
})

module.exports = {
    User,
    Contragents,
    Parties
}