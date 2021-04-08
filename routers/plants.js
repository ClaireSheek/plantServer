const express = require('express')
const router = express.Router()
const plantsController = require('../controllers/plants')

router.get('/', plantsController.getAllPlants)

router.get('/:id', plantsController.getPlantById)

router.post('/', plantsController.createPlant)

module.exports = router
