require("dotenv").config()

const { 
  checkDBConnection, 
  syncModels 
} = require('./database')

const User = require('./api/models/user.model')
const Pet = require('./api/models/pet.model')

const startDB = async () => {
  await checkDBConnection()
  syncModels()
}

startDB()