const router = require("express").Router()

const userRouter = require("./user.router")

router.use('/user', userRouter)
// router.use('/pet', petRouter)

module.exports = router