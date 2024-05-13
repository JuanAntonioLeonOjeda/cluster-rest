const User = require("../api/models/user.model")
const Pet = require("../api/models/pet.model")
const Contact = require("../api/models/contact.model")
const Food = require("../api/models/food.model")
const Food_Pet = require('../api/models/Food_Pet')

const defineRelations = () => {
  //ONE TO ONE
  User.hasOne(Contact)
  Contact.belongsTo(User) //Will have the foreign key 'userId'

  //ONE TO MANY
  User.hasMany(Pet)
  Pet.belongsTo(User) //Will have the foreign key 'userId'

  // MANY TO MANY
  Pet.belongsToMany(Food, { through: Food_Pet })
  Food.belongsToMany(Pet, { through: Food_Pet })

  console.log('Relations defined')
}

module.exports = defineRelations