var controll = angular.module('controllers', []);

controll.run(function($ionicPlatform, $ionicHistory, $rootScope) {
});


/*
Main Controller
*/
controll.controller('IndexController', function($scope, $state, $ionicHistory, $location, $ionicSideMenuDelegate, user) {
	console.info("IndexController");

	$scope.$on('$ionicView.enter', function(e, ts) {
		//lgi("enter", e, ts);
	});
	$scope.$on('$ionicView.leave', function(e, fs) {
		//lgi("leave", e, fs);
	});

	$scope.isBackButtonShow = function() {
		return $ionicHistory.backView() != null;
	}
	$scope.changeState = function(to) {
		if ($ionicSideMenuDelegate.isOpenLeft()) {
			$ionicSideMenuDelegate.toggleLeft();
		}
		$state.go(to);
	}


	/* SAMPLE DATA */
	$scope.books = [
	{
		title: "Boneshaker",
		author: "Cherie Priest",
		thumbnail: "img/books/book1.jpg",
		rating: 3.5,
		review_count: 15,
		stock: {
			available: 5,
			total: 20
		},
		pages_count: 300,
		isbn: "9785412654856",
		year: 2000,
		shelf_number: 4.1,
	},
	{
		title: "The Anubis Gates",
		author: "Tim Powers",
		thumbnail: "img/books/book2.jpg",
		rating: 2.5,
		review_count: 17,
		stock: {
			available: 5,
			total: 34
		},
		pages_count: 250,
		isbn: "9856327594524",
		year: 2010,
		shelf_number: 5.324
	},
	{
		title: "The Time Traveler's Wife",
		author: "Audrey Niffenegger",
		thumbnail: "img/books/book3.jpg",
		rating: 4,
		review_count: 5,
		stock: {
			available: 15,
			total: 40
		},
		pages_count: 270,
		isbn: "9785454896326",
		year: 2013,
		shelf_number: 2.43
	},
	{
		title: "Fortune's Rocks",
		author: "Anita Shreve",
		thumbnail: "img/books/book4.jpg",
		rating: 4,
		review_count: 5,
		stock: {
			available: 15,
			total: 40
		},
		pages_count: 270,
		isbn: "9785454896326",
		year: 2013,
		shelf_number: 8.23
	}
	];

	$scope.reviews = [
	{
		name: "Afief Yona R",
		date: "10 Oktober 2015",
		content: "Proin euismod sapien quis libero luctus elementum. Mauris semper ullamcorper porta. Integer aliquam ullamcorper ante vel convallis. Fusce nec lacus quis mi accumsan lobortis. Aliquam erat volutpat. Nunc condimentum pharetra accumsan. Suspendisse pharetra convallis dui, eu faucibus eros rhoncus nec.",
		like: false
	},
	{
		name: "Ronald Widjaja",
		date: "9 Agustus 2015",
		content: "Proin euismod sapien quis libero luctus elementum. Mauris semper ullamcorper porta. Integer aliquam ullamcorper ante vel convallis. Fusce nec lacus quis mi accumsan lobortis. Aliquam erat volutpat. Nunc condimentum pharetra accumsan. Suspendisse pharetra convallis dui, eu faucibus eros rhoncus nec.",
		like: true
	},
	{
		name: "Henida W",
		date: "6 Agustus 2015",
		content: "Proin euismod sapien quis libero luctus elementum. Mauris semper ullamcorper porta. Integer aliquam ullamcorper ante vel convallis. Fusce nec lacus quis mi accumsan lobortis. Aliquam erat volutpat. Nunc condimentum pharetra accumsan. Suspendisse pharetra convallis dui, eu faucibus eros rhoncus nec.",
		like: false
	}
	];

	$scope.messages = [
	{
		name: "Admin",
		date: "10 Oktober 2015",
		subject: "Teguran",
		content: "Buku `Merajut Untaian Rindu` telah melebihi waktu pengembalian."
	},
	{
		name: "Admin",
		date: "3 Oktober 2015",
		subject: "Respon Tanggapan",
		content: "Terimakasih telah memberikan tanggapan pada tanggal 2 Oktober 2015. Kami akan terus memperbaiki aplikasi ini menjadi lebih baik. Terima kasih."
	}
	];


	$scope.borroweds = [
	{
		title: "The Forever War",
		author: "Joe Haldeman",		
		thumbnail: "img/books/book5.jpg",
		pages_count: 300,
		isbn: "9785412654856",
		year: 2000,
		date_borrow: "15 September 2015",
		date_return: "10 Oktober 2015"
	},
	{
		title: "Ender's Game",
		author: "Orson Scott",		
		thumbnail: "img/books/book6.jpg",
		pages_count: 210,
		isbn: "9785412654856",
		year: 2010,
		date_borrow: "12 September 2015",
		date_return: "13 Oktober 2015"
	},
	{
		title: "Merajut Untaian Rindu",
		author: "Alibaba Everest",		
		thumbnail: "img/books/book1.jpg",
		pages_count: 250,
		isbn: "9788935487965",
		year: 2015,
		date_borrow: "10 September 2015",
		date_return: "7 Oktober 2015"
	}
	];
});