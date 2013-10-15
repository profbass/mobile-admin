
/*
 * GET home page.
 */

//var Organization = Parse.Object.extend("Organization");

exports.index = function(req, res){
	//Pull Organizations and assign them to a select box
	//var query = new Parse.Query(Organization);

	//create array for fact fields
	var factArray = [];
	var interestArray = [];
	var organizationObjectArray = [];

	//Grabs organizations and puts them in the organizationArray and populates the select box
	// this.ascending("name").find({
	// 	// success: function(results) {
	// 	//   organizationObjectArray = results;
	// 	//   for(var i = 0; i < results.length; i++) {
	// 	//     var 
	// 	//       org = results[i],
	// 	//       name = org.get('name'),
	// 	//       id = org.get.id,
	// 	//       select = $('#organizationField')
	// 	//     ;

	// 	//     select.append('<option value="' + i + '">' + name + '</option>');
	// 	//   }
	// 	// },
	// 	// error: function(error) {
	// 	//   alert("Error: " + error.code + " " + error.message);
	// 	// }
	// }).then(function(){
		// Render remplate, pass in vars
	  	res.render('index', { 
	  		title: 'Express' 
	  	});
	//});
	

};