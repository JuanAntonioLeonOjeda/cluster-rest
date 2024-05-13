const Food = require('../models/food.model')

const getAllFoods = async (req, res) => {
  try {
   const foods = await Food.findAll()

   res.json({
     message: "foods fetched",
     result: foods,
   });
  } catch (error) {
    res.json(error);
  }
}

const getOneFood = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id)

    res.json({
      message: "food fetched",
      result: food,
    });
  } catch (error) {
    res.json(error);
  }
};

const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body)
    res.json({
      message: 'food created',
      result: food
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  getAllFoods,
  getOneFood,
  createFood
}