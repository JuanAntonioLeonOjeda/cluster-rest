const router = require("express").Router();

router.get('/', (req, res) => {
  res.send('all users')
})

router.get('/:id', (req, res) => {
  res.send(`User ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('User created')
})

router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`)
})

router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
})

module.exports = router
