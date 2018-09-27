app.controller("homeController",($scope,fetchGalService)=>{
	fetchGalService.fetchGallery((data)=>{
		if(data.status=="ok"){
			$scope.galleries = data.data;
		}
		else{
			console.log("error");
		}
	})
})