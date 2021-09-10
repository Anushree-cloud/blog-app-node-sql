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
    console.log(req.body);
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

