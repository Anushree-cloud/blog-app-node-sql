const BlogCat = require('../models/blogCategories')

exports.getAllCategories = (req, res) => {
    BlogCat.getAll((categories) => {
        res.json({
            data: {
                message: 'All Categories Fetched..!',
                categories: categories
            }
        })
    })
} 

exports.getSingleCategory = (req, res) => {
    let id = req.params.catId
    BlogCat.getById(id, (category) => {
        res.json({
            data: {
                message: `Category fetched with id: ${id}`,
                category: category
            }
        })
    })
}

exports.addCategory = (req, res) => {
    let newData = {
        name: req.body.name
    }
    BlogCat.save(newData, () => {
        res.json({
            data: {
                message: 'New Blog-Category Added..!',
                category: newData
            }
        })
    })
}

exports.updateCategory = (req, res) => {
    let id = req.params.catId
    BlogCat.getById(id, (catagory) => {
        let updatedData = {
            name: req.body.name ? req.body.name : catagory.name 
        }
        BlogCat.updateById(updatedData, id, (blogCat) => {
            res.json({
                data: {
                    message: `Blog Updated with id=${id}`,
                    category: blogCat
                }
            })
        })
    })
}

