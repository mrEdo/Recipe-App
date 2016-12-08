// My Scripts. . . For Real!!

//URL: https://api.edamam.com/search?q=rice&app_id=5e28d891&app_key=0f64478a1652306c913f25fbc520452a

var app = angular.module('recipeApp',[]);
app.controller('recipeController', function($scope, $http){
	$scope.getRecipes = function(){
		//alert();
		var recipeString = 'https://api.edamam.com/search?q=' + $('#search').val() + '&app_id=5e28d891&app_key=0f64478a1652306c913f25fbc520452a';
		var healthParams;
		// if( $("#veg:checked").val() == $("#veg").val() ){
		// 	healthParams += '&health=vegan';
		// 	//recipeString = 'https://api.edamam.com/search?q=' + $('#search').val() + '&app_id=5e28d891&app_key=0f64478a1652306c913f25fbc520452a&health=vegan';
		// }
		

		// recipeString += healthParams;

		$http.get(recipeString)
		.then(function(recipeJSON){
			//$("#listArea").append(recipeJSON.data.hits[0].recipe.label);
			$scope.recipes = recipeJSON.data.hits;
			console.log(recipeJSON.data.hits[0]);
		});
	}
	
});





























// var st;
// var r;

// $("#button").click(function(){
// 	var searchResults = $("#search").val();
//     $.getJSON("https://api.edamam.com/search?q=" + searchResults + "&app_id=5e28d891&app_key=0f64478a1652306c913f25fbc520452a")
//     .done(function(result){
//     	console.log(result);
//     	for (var i = 0; i < result.hits.length; i++) {
//         	$("body").append(
//         		"<h1>" + result.hits[i].recipe.label + "</h1>" +
//         		"<h4>" + result.hits[i].recipe.yield + "</h4>" +
//         		"<h1>" + result.hits[i].recipe.calories + "</h1>"
//         	);
//         };
//     });
// });