
// APP
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// DB
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
mongoose.connect(db)
.then(() => console.log("DB connected"))
.catch(err => console.log(err))

// Start
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App started at port ${port}`))

//Routes
const item = require('./router/api/item')
app.use('/api/item', item)