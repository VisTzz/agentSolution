const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const ApiError = require('../error/error')

const jwtGenerate = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.CLIENT_SECRET, { expiresIn: '24h' })
}

class UserController {

    async login(req, res, next) {
        const { email, password, role } = req.body;
        console.log(req.body)
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                next(ApiError.badRequest('Пользователь не найден'))
            }

            const comparePassword = bcrypt.compareSync(password, user.password);

            if (!comparePassword) {
                next(ApiError.badRequest('Пользователь не найден'))
            }

            const token = jwtGenerate(user.id, user.email, user.role)
            return res.json({ token })
        }
        catch(e) {
            next(ApiError.badRequest('Необработанное исключение'))
        }
        
    }

    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, password: hashPassword, role })
        const token = jwtGenerate(user.id, user.email, user.role)

        return res.json({ token })
    }

    async auth(req, res, next) {
        const token = jwtGenerate(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }

    async getAll(req, res, next) {
        const users = await User.findAll()
        return res.json(users)
    }

    async getUserById(req, res) { 
        //if (!req.parameters) return 'Error';

        const {id} = req.params;
        const user = await User.findOne({where: {id}}) 
        return res.json(user)
    }

    async updateUser(req, res) {
        const {id} = req.params;
        const body = req.body;
        console.log(req)
        const user = await User.update({
            partyId: body.partyId
        }, {where: {id}}) 
        
        return res.json(user)
    }
}

module.exports = new UserController();