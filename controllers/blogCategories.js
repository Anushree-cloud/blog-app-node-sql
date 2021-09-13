const BlogCat = require('../models/blogCategories')

exports.getAllCategories = (req, res) => {
    BlogCat.getAll((categories) => {
        res.json({
            data: {
                message: 'All Categories Fetched..!',
                data: categories
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
                data: category
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
                data: newData
            }
        })
    })
}

exports.updateCategory = (req, res) => {
    let id = req.params.catId
    BlogCat.getById(id, (catagory) => {
        let updatedData = {
            id: catagory.id,
            name: req.body.name ? req.body.name : catagory.name 
        }
        BlogCat.updateById(updatedData, id, () => {
            res.json({
                data: {
                    message: `Blog Updated with id=${id}`,
                    data: updatedData
                }
            })
        })
    })
}

exports.deleteCategory = (req, res) => {
    let id = req.params.catId
    BlogCat.deleteById(id, () => {
        res.json({
            message: `Blog Deleted with id=${id}`
        })
    })
}

