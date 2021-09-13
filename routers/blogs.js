const blogRouter = require('express').Router()
const Blog = require('../controllers/blogs')

blogRouter.get('/blogs', Blog.getAllBlogs) //all

blogRouter.get('/blogs/:blogId', Blog.getSingleBlogByBlogId) //single by id

blogRouter.get('/blogs/blogUsers/:userId', Blog.getAllBlogsByUserId) // all by user id

blogRouter.get('/blogs/blogCategories/:catId', Blog.getAllBlogsByCategoryId) //all by category id

// blogRouter.get('/blogs/blogDetails', Blog.getAllBlogDetails) //all with details

blogRouter.post('/blogs', Blog.addBlog)

blogRouter.put('/blogs/:blogId', Blog.updateBlog)

blogRouter.delete('/blogs/:blogId', Blog.deleteBlog)



module.exports = blogRouter