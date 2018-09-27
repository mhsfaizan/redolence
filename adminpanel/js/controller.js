app.controller("rootController",(saveData,loginService,$scope)=>{
	$scope.showNav = saveData.isLoggedIn();
	$scope.showNavigation = ()=>{
		$scope.showNav = saveData.isLoggedIn();;
	}
	$scope.isShowViewImage = false;
	$scope.isShowViewImages = ()=>{
		$scope.isShowViewImage = true;
	}
	$scope.upSetImageView = ()=>{
		$scope.isShowViewImage = false;
	}
	loginService.fetchGal((data)=>{
		if(data.status=="ok"){
			$scope.galleries = data.data;
		}
	});
});
app.controller('loginController',($location,$scope,loginService,saveData)=>{
	var loginData = {};
	$scope.onSubmit = (form)=>{
		loginData.username = $scope.username;
		loginData.password = $scope.password;
		loginService.login(loginData,(resp)=>{
			if(resp.status=="ok"){
				saveData.saveDataLocal(resp.data
					);
				$scope.$parent.showNavigation();
				$location.path("./dashboard");
			}
			else{
				console.log(resp.data);
			}
		});
	}
})
app.controller("uploadController",($scope,loginService)=>{
	$scope.onSubmit = (form)=>{
		$scope.galData.file = $scope.file;
		loginService.updateGal($scope.galData,(resp)=>{
			if(resp.status=="ok"){
				window.location.href = "./dashboard";
			}
			else{
				alert("error");
			}
		});
	}
})