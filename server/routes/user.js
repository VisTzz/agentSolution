const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMeddleware = require('../middleware/authMiddleware')

router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.get('/auth', authMeddleware, userController.auth) 
router.get('/getAll', userController.getAll) //for testing, should be delete
router.get('/get/:id', userController.getUserById)
router.post('/:id', userController.updateUser)

module.exports = router;