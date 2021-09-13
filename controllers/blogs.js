const Blogs = require('../models/blogs')

exports.getAllBlogs = (req, res) => {
    Blogs.getAll((users) => {
        res.json({
            data: {
                message: 'All blogs Fetched..!',
                data: users
            }
        })
    })
}

exports.getSingleBlogByBlogId = (req, res) => {
    id = req.params.blogId
    Blogs.getSingleById(id, (blog) => {
        if(blog.length){
            res.json({
                data: {
                    message: `Blog fetched with id:${id}`,
                    data: blog
                }
            })
        }
        else{
            res.json({
                data: {
                    message: `No Blog found with id:${id}..!`
                }
            })
        }
        
    })
}

exports.getAllBlogsByUserId = (req, res) => {
    userId = req.params.userId
    Blogs.getAllByUser(userId, (blogs) => {
        if(blogs.length){
            res.json({
                data: {
                    message: `All Blogs fetched by user with id:${userId}`,
                    data: blogs
                }
            })
        }
        else {
            res.json({
                data: {
                    message: `No Blog found by User with id:${userId}..!`
                }
            })
        }
    })
}

exports.getAllBlogsByCategoryId = (req, res) => {
    catId = req.params.catId
    Blogs.getAllByCatagory(catId, (blogs) => {
        if(blogs.length){
            res.json({
                data: {
                    message: `All Blogs fetched from Category with id:${catId}`,
                    data: blogs
                }
            })
        }
        else {
            res.json({
                data: {
                    message: `No Blog found from Category with id:${catId}..!`
                }
            })
        }
    })
}

// exports.getAllBlogDetails = (req, res) => {
//     Blogs.getBlogDetails((blogs) => {
//         res.json({
//             data: {
//                 message: 'All Blogs fetched with Details..!',
//                 data: blogs
//             }    
//         })
//     })
// }

exports.addBlog = (req, res) => {
    let newblog = {
        title: req.body.title,
        description: req.body.description,
        category_id: req.body.category_id,
        user_id: req.body.user_id
    }
    Blogs.save(newblog, () => {
        res.json({
            data: {
                message: 'New Blog Added..!',
                data: newblog
            }
        })
    })
}

exports.updateBlog = (req, res) => {
    let blogId = req.params.blogId
    Blogs.getSingleById(blogId, (blog) => {
        if(blog.length){
            let updatedBlog = {
                id: blog.id,
                title: req.body.title ? req.body.title : blog.title,
                description: req.body.description ? req.body.description : blog.description,
                category_id: blog.category_id,
                user_id: blog.user_id
            }
            Blogs.updateById(updatedBlog, blogId, () => {
                res.json({
                    data: {
                        message: `Blog Updated with id: ${blogId}`,
                        data: updatedBlog
                    }
                })
            })
        }
        else{
            res.json({
                message: `Blog with id:${blogId} Not found..!`
            })
        }
    })
}

exports.deleteBlog = (req, res) => {
    let blogId = req.params.blogId
    Blogs.deleteById(blogId, () => {
        res.json({
            data: {
                message: `Blog Deleted with id:${blogId}`
            }
        })
    })
}