const express = require('express')

const blogCatRouter = require('./routers/blogCategories')

const app = express()

app.use(blogCatRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})