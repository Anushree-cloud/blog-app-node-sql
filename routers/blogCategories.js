const express = require('express')
const blogCatRouter = express.Router()
const BlogCat = require('../controllers/blogCategories')

blogCatRouter.get('/blogs/categories', BlogCat.getAllCategories)

blogCatRouter.get('/blogs/categories/:catId', BlogCat.getSingleCategory)

blogCatRouter.post('/blogs/categories/add', BlogCat.addCategory)

module.exports = blogCatRouter