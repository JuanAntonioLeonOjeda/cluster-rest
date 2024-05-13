const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Food = connection.define('food', {
  name: {
    type: DataTypes.STRING
  }
  },
 {
  timestamps: false
 }
)

module.exports = Food