const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    notes: { type: String, required: true },
    user: { type: String, required: true }
})

const BlogModel = mongoose.model('Blog', blogSchema)

module.exports = {
    BlogModel
}