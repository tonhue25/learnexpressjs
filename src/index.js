// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// const port = 3000

// app.use(morgan('combined'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const path = require('path')
const morgan = require('morgan')
//const handlebars = require('express-handlebars')


const hbs = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('combined'))

app.engine('hbs', hbs.engine({extname: '.hbs'}))
app.set('view engine', "hbs")
app.set('views', './src/resources/views')

app.get('/', (req, res) => {
  res.render("home");
})

app.get('/news', (req, res) => {
  res.render("news");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})