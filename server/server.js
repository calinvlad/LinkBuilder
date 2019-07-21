const express = require('express')
const bodyParser = require('body-parser')
const {sequelize} = require('./db/models')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.port || 3001
const http = require('http')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./src/routes')(app)

sequelize.sync({force: false})
    .then(() => {
	httpServer.listen(PORT, () => {
        	console.log('HTTP Server running on port ' + port);
	});
    })
