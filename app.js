const { parse } = require('dotenv')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

//handle error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))

//handle succes
db.once('open', () => {
    console.log('Database is conections')
})

app.listen(process.env.port, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

