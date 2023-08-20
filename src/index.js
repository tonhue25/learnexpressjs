const express = require('express');
const path = require('path');
const morgan = require('morgan');

const hbs = require('express-handlebars');

const route = require('./routes');

const db = require('./config/db');
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
// add middleware submit body.
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
// './src/resources/views'
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
