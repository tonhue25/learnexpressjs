const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', handlebars())
app.set('view engine', "handlebars")
app.set('views', path.join(__dirname,"resources/views"))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render("home");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})