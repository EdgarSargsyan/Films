const express = require('express');
const db = require('../model/movie')
const router = express.Router();


router.get('/', (req, res) => {
	res.render('index', { title: 'Movies', movie: db});
});

module.exports = router;