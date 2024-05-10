require("dotenv").config()

const express = require('express')
const morgan = require('morgan')

const { 
  checkDBConnection, 
  syncModels 
} = require('./database')

const User = require('./api/models/user.model')
const Pet = require('./api/models/pet.model')

const router = require("./api/routes")

const startDB = async () => {
  await checkDBConnection()
  syncModels()
}

const app = express()
app.use(morgan('dev'))

app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Express started, listening on port ${process.env.PORT}`)
  startDB()
})

