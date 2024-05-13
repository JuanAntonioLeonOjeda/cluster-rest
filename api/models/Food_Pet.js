const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Contact = connection.define(
  "pet_food",
  {
    quantity: {
      type: DataTypes.INTEGER
  }
},
  {
    timestamps: false,
  }
);

module.exports = Contact;
