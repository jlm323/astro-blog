const express = require('express')
const router = express.Router()
const blogCtrl = require('../controllers/blogController')

router.get('/blog', blogCtrl.index)
router.post('/add', blogCtrl.add)
router.put('/:id', blogCtrl.updateBlogPost)
router.delete('/:id', blogCtrl.remove)

module.exports = router