const router = require("express").Router()

const {
  getAllPets,
  getOnePet,
  createPet,
  addFood
} = require('../controllers/pet.controller')

router.get('/', getAllPets)

router.get('/:id', getOnePet)

router.post('/', createPet)

router.put('/:id', (req, res) => {
  res.send(`Pet ${req.params.id} updated`)
})

router.put("/:petId/add/:foodId", addFood);

router.delete('/:id', (req, res) => {
  res.send(`Pet ${req.params.id} deleted`);
})

module.exports = router
