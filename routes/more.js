const express = require('express');
const router = express.Router();
const db = require('../model/movie')


router.get('/:name', (req, res) => {
	db.forEach((eachMovie) => {
		if(eachMovie.Title === req.params.name){
			res.render('more', {title: 'Movie', movie: eachMovie});
			console.log(req.params.name);
		}
	})
});


module.exports = router;