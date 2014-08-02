(function(){
	'use strict';
	app.controller('PostsCtrl', function($scope){
		$scope.posts = [];
		$scope.post = {url: 'http://', title: ''};

		$scope.addPost = function()  {
			$scope.posts.push($scope.post);
			$scope.post = {url: 'http://', title: ''};
		};

		// delete Post
		$scope.delPost = function (index) {
			$scope.posts.splice(index, 1);
		}
	});
})();