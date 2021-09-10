const express = require('express')

const blogCatRouter = require('./routers/blogCategories')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(blogCatRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})