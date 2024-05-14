const router = require("express").Router()

const userRouter = require("./user.router")
const petRouter = require("./pet.router")
const contactRouter = require("./contact.router")
const foodRouter = require("./food.router")
const authRouter = require("./auth.router")

router.use('/user', userRouter)
router.use('/pet', petRouter)
router.use("/contact", contactRouter)
router.use("/food", foodRouter)
router.use("/auth", authRouter)


module.exports = router