const express = require('express')
const router = express.Router()
const blogCtrl = require('../controllers/blogController')

router.get('/index', blogCtrl.index)
router.post('/add', blogCtrl.add)

module.exports = router