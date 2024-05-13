const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Contact = connection.define('contact', {
    address: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.INTEGER
    }
  },
 {
  timestamps: false
 }
)

module.exports = Contact