const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const User = connection.define('user', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
 {
  timestamps: false
 }
)

module.exports = User