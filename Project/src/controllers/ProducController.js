

const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query //get requests on the route, if nothing comes, set the default to 1
        const Products = await Product.paginate({}, { page, limit: 10 }) // short syntax with variable page
        return res.json(Products)
    },

    async store(req, res) {
        const product = await Product.create(req.body)
        return res.json(product)
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })// after updating it returns updated
        return res.json(product)
    },

    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }


}