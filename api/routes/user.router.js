const router = require("express").Router()

const {
  getAllUsers,
  getOneUser,
  createUser
} = require('../controllers/user.controller')

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.post('/', createUser)

router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`)
})

router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
})

module.exports = router
