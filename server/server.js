const express = require('express')
const bodyParser = require('body-parser')
const {sequelize} = require('./db/models')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 8000 || 8001

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./src/routes')(app)

sequelize.sync({force: false})
    .then(() => {
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
    })