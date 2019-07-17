const db = require('../../db/models')

module.exports = {
    async get(req, res) {
        await db.Link.findAll()
            .then(links => {res.status(200).send({success: true, data: links})})
            .catch(err => {res.status(500).send({success: false, data: err})})
    },
    async getByName(req, res) {
        await db.Link.findOne({where: {name: req.params.name}})
            .then(link => {res.status(200).send({success: true, data: link})})
            .catch(err => {res.status(500).send({success: false, data: err})})
    },
    async create(req, res) {
        console.log(req.body.name)
        await db.Link.create({
            name: req.body.name,
            link: req.body.link
        })
            .then(link => {res.status(200).send({success: true, data: link})})
            .catch(err => {res.status(500).send({success: false, data: err})})
    }
}