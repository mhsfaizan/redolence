app.config(($routeProvider,$locationProvider)=>{
	var myresolve = ()=>{
		return {
			"check":($location,saveData)=>{
				if(!saveData.isLoggedIn()){
					$location.path("./");
				}
			}
		}
	}
	$routeProvider
	.when("/",{
		templateUrl:"pages/login.php"
	})
	.when("/dashboard",{
		resolve:myresolve(),
		templateUrl:"pages/dashboard.php"	
	})
	.when("/gallery",{
		resolve:myresolve(),
		templateUrl:"pages/gallery.php"
	})
	.when("/logout",{
		resolve:{
			deadresolve:(saveData,$location)=>{
				saveData.clearData();
				$location.path("./");
			}
		}
	})
	.otherwise({
		templateUrl:"pages/login.php"
	})
	$locationProvider.html5Mode(true);
	
});