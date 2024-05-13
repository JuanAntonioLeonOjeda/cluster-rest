const router = require("express").Router()

const {
  getAllUsers,
  getOneUser,
  createUser,
  addPet,
  createAndAddPet
} = require("../controllers/user.controller");

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.post('/', createUser)
router.post("/:id/createPet", createAndAddPet)

router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`)
})

router.put('/:userId/add/:petId', addPet)

router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
})

module.exports = router
