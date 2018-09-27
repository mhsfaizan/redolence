app.service("fetchGalService",function($http){
	this.fetchGallery = (cb)=>{
		$http({
			method:"GET",
			url:"php/get-gallery.php"
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
})