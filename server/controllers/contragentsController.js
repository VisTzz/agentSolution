const { Contragents } = require('../models/models')
const ApiError = require('../error/error')

class ContragentsController {
    async createContragents(req, res, next) {
        const body = JSON.stringify(req.body)
        console.log(body)
        console.log(req.body)

        try {
            const contragents = await Contragents.create({ body })
            return res.json(contragents)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        } 
        
    }

    async getContragents(req, res) {
        const contragents = await Contragents.findAll()
        console.log(contragents)
        return res.json(contragents)
    }

    async getContragentsById(req, res) { 
        //if (!req.parameters) return 'Error';

        const {id} = req.params;
        const contragent = await Contragents.findOne({where: {id}}) 
        return res.json(contragent)
    }

    async updateContragent(req, res) {
        const {id} = req.params;
        const {firstName, lastName} = req.body;
        const contragent = await Contragents.update({
            firstName: firstName,
            lastName: lastName
        }, {where: {id}}) 
        
        return res.json(contragent)
    }

    async deleteContragents(req, res) {

    }
}

module.exports = new ContragentsController();