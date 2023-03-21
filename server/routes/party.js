const Router = require('express')
const router = new Router()
const partiesController = require('../controllers/partiesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/getAll', partiesController.getParties)
router.post('/create', partiesController.createParty)
router.get('/get/:id', partiesController.getPartyById) 
router.post('/get/:id', partiesController.updateParty) 

module.exports = router;