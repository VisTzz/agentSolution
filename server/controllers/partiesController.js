const { Parties } = require('../models/models')
const ApiError = require('../error/error')

class PartiesController {
    async createParty(req, res, next) {
        const body = JSON.stringify(req.body)

        try {
            const party = await Parties.create({ body })
            return res.json(party)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        } 
        
    }

    async getParties(req, res) {
        const party = await Parties.findAll()
        return res.json(contragents)
    }

    async getPartyById(req, res) { 
        //if (!req.parameters) return 'Error';

        const {id} = req.params;
        const party = await Parties.findOne({where: {id}}) 
        return res.json(party)
    }

    async updateParty(req, res) {
        const {id} = req.params;
        const { body } = req;
        const party = await Parties.update({
            body: body
        }, {where: {id}}) 
        
        return res.json(contragent)
    }
}

module.exports = new PartiesController();