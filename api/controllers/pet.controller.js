const Pet = require('../models/pet.model')
const Food = require('../models/food.model')
const User = require('../models/user.model')

const getAllPets = async (req, res) => {
  try {
   const pets = await Pet.findAll()

   res.json({
     message: "pets fetched",
     result: pets,
   });
  } catch (error) {
    res.json(error);
  }
}

const getOnePet = async (req, res) => {
  try {
    // EAGER LOADING
    // const pet = await Pet.findByPk(req.params.id, {
    //   include: [{model: Food}, { model: User }]
    // })

    //LAZY LOADING
    const pet = await Pet.findByPk(req.params.id)

    const food = await pet.getFood()

    res.json({
      message: "pet fetched",
      result: {
        pet,
        food
      },
    });
  } catch (error) {
    res.json(error)
  }
}

const createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body)
    res.json({
      message: 'pet created',
      result: pet
    })
  } catch (error) {
    res.json(error)
  }
}

const addFood = async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.petId)
    const food = await Food.findByPk(req.params.foodId)

    await pet.addFood(food)
    
    res.json({
      message: "Food added",
      result: pet
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  getAllPets,
  getOnePet,
  createPet,
  addFood
}