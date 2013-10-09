/*
 * GET about page.
 */

exports.bio = function(req, res){
  res.render('about', { 
  	title: 'About Page',
  	name: 'Drunk Dude'
  });
};