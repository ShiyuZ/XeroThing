app.controller('app.controllers.home', function($scope) {
	$scope.goToFood = function(office) {
		$scope.isSelectingOffice = false;
		$scope.isSelectingFood = true;
		$scope.selectedOffice = office;
	};
	$scope.goToOffice = function() {
		if (_.chain($scope.foods)
			.where({selected:true})
			.size() == 0) {
			$scope.useHint = true;
		} else {
			$scope.isSelectingFood = false;
			if ($scope.selectedOffice && $scope.name) {
				$scope.isWaitingScreen = true;
			} else {
				$scope.isSelectingOffice = true;
			}
		}
	};
	$scope.goToWaitingScreen = function(office) {
		$scope.selectedOffice = office;
		$scope.isSelectingOffice = false;
		$scope.isWaitingScreen = true;
	};
	$scope.backToHome = function() {
		$scope.init();
	};
	$scope.backToFood = function() {
		$scope.isWaitingScreen = false;
		$scope.isSelectingFood = true;
	};
	$scope.selectFood = function(food) {
		food.selected = !food.selected;
	};
	$scope.getFoodImage = function(food) {
		console.log(food);
		console.log(_.where($scope.foods),{name: food});
		return _.chain($scope.foods).where({name: food}).first().value().image;
	};
	$scope.init = function() {
		$scope.isSelectingFood = true;
		$scope.isSelectingOffice = true;
		$scope.isWaitingScreen = false;
		$scope.useHint = false;
		$scope.foods = [
			{name:"Mexican", selected:false, image: 'taco.svg'},
			{name:"American", selected:false, image: 'burger.svg'},
			{name:"Curry", selected:false, image: 'curry.svg'},
			{name:"Noodles", selected:false, image: 'noodle.svg'},
			{name:"Pasta", selected:false, image: 'pasta.svg'},
		];
		$scope.people = [
			{name:'James', foods:['Mexican']},
			{name:'Shiyu', foods:['American']},
			{name:'Rachael', foods:['Curry']},
			{name:'That guy', foods:['Noodles']},
		];
		$scope.offices = ['Auckland', 'Melbourne', 'San Francisco', 'Wellington'];
	};
	$scope.init();
});
