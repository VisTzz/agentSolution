const Router = require('express')
const router = new Router()
const contragentsController = require('../controllers/contragentsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/getAll', contragentsController.getContragents)
router.post('/create', checkRole('ADMIN'), contragentsController.createContragents)
router.get('/get/:id', contragentsController.getContragentsById) 
router.post('/get/:id', contragentsController.updateContragent) 



module.exports = router;