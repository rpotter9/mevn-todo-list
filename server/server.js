const express = require('express');
const cors = require('cors')
const db = require('./db')
const app = express()

const routes = require('./routes')

app.use(cors())
app.use(express.json());


/**
 * Setup database connection and models
 */
db.init()

const port = process.env.PORT || 3000;


routes.registerRoutes(app)


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));