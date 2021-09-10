const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blog_app'
})

db.connect((error) => {
    if(error) throw error
    console.log('Connected => Table: users');
})

//get all users
const getAll = (callback) => {
    let sqlQuery = 'SELECT * FROM users'
    db.query(sqlQuery, (error, users) => {
        if(error) throw error
        callback(users)
    })
}

//get a single by id
const getById = (userId, callback) => {
    let sqlQuery = `SELECT * FROM users WHERE id=${userId}`
    db.query(sqlQuery, (error, user) => {
        if(error) throw error
        callback(user)
    })
}

//add a user
const save = (newData, callback) => {
    let sqlQuery = 'INSERT INTO users SET ?'
    db.query(sqlQuery, { name: newData.name, email: newData.email, password: newData.password }, (error, user) => {
        if(error) throw error
        callback(user)
    })
}

//update a user
const updateById = (updatedData, userId, callback) => {
    let sqlQuery = `UPDATE users SET name=${updatedData.name}, email=${updatedData.email}, password=${updatedData.password} WHERE id=${userId}`
    db.query(sqlQuery, (error, user) => {
        if(error) throw error
        callback(user)
    })
}

//delete a user
const deleteById = (userId, callback) => {
    let sqlQuery = `DELETE FROM users WHERE id=${userId}`
    db.query(sqlQuery, (error, user) => {
        if(error) throw error
        callback()
    })
}

module.exports = {
    getAll, getById, save, updateById, deleteById
}