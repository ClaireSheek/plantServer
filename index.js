require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const plantsRouter = require('./routers/plants')
// const usersRouter = require('./routers/users')
const { checkJwt } = require('./middleware')

const app = express()
const port = process.env.PORT || 4001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(helmet())
// app.use(checkJwt)
app.use(morgan('combined'));

app.use('/plants', plantsRouter)
// app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my Plant API! Add /plants to the url to view the list of all plants')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})