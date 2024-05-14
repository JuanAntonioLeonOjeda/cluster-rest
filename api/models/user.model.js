const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const User = connection.define('user', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: '123'
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    }
  },
 {
  timestamps: false
 }
)

module.exports = User