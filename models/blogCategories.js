const mysql = require('mysql2')

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blog_app'
})

db.connect((error) => {
    if(error) throw error
    console.log('Connected => Table: blog_categories');
})

//get all categories
const getAll = (callback) => {
    let sqlQuery = 'SELECT * FROM blog_categories'
    db.query(sqlQuery, (error, blogCat) => {
        if(error) throw error
        callback(blogCat)
    })
}

//get single category
const getById = (blogCatId, callback) => {
    let sqlQuery = `SELECT * FROM blog_categories WHERE id=${blogCatId}`
    db.query(sqlQuery, (error, blogCat) => {
        if(error) throw error
        callback(blogCat)
    })
}

//add category
const save = (newData, callback) => {
    let sqlQuery = `INSERT INTO blog_categories SET ?`
    db.query(sqlQuery, { name: newData.name}, (error, blogCat) => {
        if(error) throw error
        callback()
    })
}

//update category
const updateById = (updatedData, blogCatId, callback) => {
    let sqlQuery = `UPDATE blog_categories SET name='${updatedData.name}' WHERE id=${blogCatId}`
    db.query(sqlQuery, (error, blogCat) => {
        if(error) throw error
        callback()
    })
}

//delete a blogcat
const deleteById = (blogCatId, callback) => {
    let sqlQuery = `DELETE FROM blog_categories WHERE id=${blogCatId}`
    db.query(sqlQuery, (error, user) => {
        if(error) throw error
        callback()
    })
}

module.exports = {
    getAll, getById, save, updateById, deleteById
}

