const router = require('express').Router()
const controller = require('../controller/data_controller')

//router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // route to swagger documentation

router.get('/playlist', controller.getAllData) //route to data controller
router.post('/add', controller.addData) //route to data controller

module.exports = router
