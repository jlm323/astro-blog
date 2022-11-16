const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: String, required: true }
},{
    timestamps: true,
})

const BlogModel = mongoose.model('Blog', blogSchema)

module.exports = {
    BlogModel
}