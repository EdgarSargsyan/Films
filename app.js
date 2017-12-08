const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const more = require('./routes/more')
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const db = require('./model/movie')
const config = require('./config/index.js');
const app = express();

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


app.use('/', index);
app.use('/film', more);

app.use((req, res, next) => {
	let err = new Error(`The film page is under construction ... `);
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error')
});


app.listen(config.get('port'), () => {
	console.log('Server running on port 3000... ');
});


