const router = require("express").Router()

const {
  getAllFoods,
  getOneFood,
  createFood
} = require('../controllers/food.controller')

router.get('/', getAllFoods)

router.get('/:id', getOneFood)

router.post('/', createFood)

router.put('/:id', (req, res) => {
  res.send(`Food ${req.params.id} updated`)
})

router.delete('/:id', (req, res) => {
  res.send(`Food ${req.params.id} deleted`);
})

module.exports = router
