const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Pet = connection.define(
  "pet",
  {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.ENUM,
      values: [ 'dog', 'cat' ]
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Pet
