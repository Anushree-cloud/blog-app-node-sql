const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blog_app'
})

db.connect((error) => {
    if(error) throw error
    console.log('Connected => Table: blogs');
})

//get all blogs
const getAll = (callback) => {
    let sqlQuery = 'SELECT * FROM blogs'
    db.query(sqlQuery, (error, blogs) => {
        if(error) throw error
        callback(blogs)
    })
}

//get a single blog by id
const getSingleById = (id, callback) => {
    let sqlQuery = `SELECT * FROM blogs WHERE id=${id}`
    db.query(sqlQuery, (error, blog) => {
        if(error) throw error
        callback(blog)
    })
}

//get all blogs of a single user
const getAllByUser = (userId, callback) => {
    let sqlQuery = `SELECT * FROM blogs WHERE user_id=${userId}`
    db.query(sqlQuery, (error, blogs) => {
        if(error) throw error
        callback(blogs)
    })
}

//get all blogs of a particular category
const getAllByCatagory = (catId, callback) => {
    let sqlQuery = `SELECT * FROM blogs WHERE category_id=${catId}`
    db.query(sqlQuery, (error, blogs) => {
        if(error) throw error
        callback(blogs)
    })
}

//get all blogs of a particular category and particular user
const getAllByCatagoryAndUser = (catId, userId, callback) => {
    let sqlQuery = `SELECT * FROM blogs WHERE category_id=${catId} AND user_id=${userId}`
    db.query(sqlQuery, (error, blogs) => {
        if(error) throw error
        callback(blogs)
    })
}

//blog details with user user details and category (inner join)
const getBlogDetailsWithUser = (callback) => {
    let sqlQuery = `SELECT 
    blog_categories.id as category_id, 
    blog_categories.name as category_name, 
    users.id as user_id, 
    users.name as user_name, 
    users.email as users_email, 
    blogs.id as blog_id, 
    blogs.title, 
    blogs.description 
    FROM blogs
    INNER JOIN users ON blogs.user_id = users.id
    INNER JOIN blogs.category_id = blog_categories.id `
    db.query(sqlQuery, (error, details) => {
        if(error) throw error
        callback(details)
    })
} 

//add a new blog
const save = (data, callback) => {
    let sqlQuery = 'INSERT INTO blogs SET ?'
    db.query(sqlQuery, { title: data.title, description: data.description, category_id: data.category_id, user_id: data.userId }, (error, blog) => {
        if(error) throw error
        callback(blog)
    })
}

//update a blog
const updateById = (data, blogId, callback) => {
    let sqlQuery = `UPDATE blogs SET title='${data.title}', description='${data.description}' WHERE id=${blogId}`
    db.query(sqlQuery, (error, blog) => {
        if(error) throw error
        callback(blog)
    })
}

//remove a blog
const deleteById = (blogId, callback) => {
    let sqlQuery = `DELETE blogs WHERE id=${blogId}`
    db.query(sqlQuery, (error) => {
        if(error) throw error
        callback()
    })
}

module.exports = {
    getAll, getAllByCatagory, getAllByCatagoryAndUser, getAllByUser, getSingleById, getBlogDetailsWithUser, save, updateById, deleteById
}