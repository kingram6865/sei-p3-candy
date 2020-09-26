const { Router } = require('express')
const controllers = require('../controllers/candies')

const router = Router()

router.get('/candies', controllers.getCandies)
router.get('/candies/:id', controllers.getCandy)
router.post('/add-candy', controllers.createCandy)
router.put('/candies/:id', controllers.updateCandy)
router.delete('/candies/:id', controllers.deleteCandy)

module.exports = router