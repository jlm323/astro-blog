const BlogModel = require('../models/Blog')

const index = async (req, res) => {
    try {
        const foundCurrentUsersBlogs = await BlogModel.find({ user: req.user })
        res.status(200).json({ blogs: foundCurrentUsersBlogs })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const createdBlogForCurrentUser = await BlogModel.create(req.body) // req.body -->  { notes: '', user: '' }
        res.status(200).json({ blogs: createdBlogForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    index, 
    add
}