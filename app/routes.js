const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('*/prototype-admin/view-data', function(req, res){

	querystring = '';
	for ( var key in req.session.data )
	querystring += key +'=' + req.session.data[key] + '&';

  res.render('prototype-admin/view-data', { data: JSON.stringify( req.session, null, 2), querystring: querystring } )
});


module.exports = router;

