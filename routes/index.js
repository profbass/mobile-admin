
/*
 * GET home page.
 */

exports.index = function(req, res){
	
	// Render remplate, pass in vars
  	res.render('index', { 
  		title: 'Express' 
  	});
};