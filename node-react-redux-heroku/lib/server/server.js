const express = require('express');
const config = require('../config.js');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/api', (req, res) => {
	res.json({
		test: 'Test API'
	});
});

// React router handles all other page and error routing
app.get('*', (req, res) => {
	res.render('index', {answer: 42});
});

app.listen(config.port, function listenHandler() {
	console.info(`Running on ${config.port}`);
});