app.service("loginService",function($http){
	this.login = (loginData,cb)=>{
		var fd = new FormData();
		for(let i in loginData){
			fd.append(i,loginData[i]);
		}
		$http({
			method:"POST",
			data:fd,
			url:"php/login.php",
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
	this.updateGal = (galData,cb)=>{
		var fd = new FormData();
		for(let i in galData){
			fd.append(i,galData[i]);
		}
		$http({
			method:"POST",
			data:fd,
			url:"php/update-gal.php",
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
	this.fetchGal = (cb)=>{
		$http({
			method:"GET",
			url:"../php/get-gallery.php"
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
})
/*save local data*/ 
app.service("saveData",function(){
	this.saveDataLocal = (data)=>{
		 localStorage.setItem("adminLogin",JSON.stringify(data));
	}
	this.isLoggedIn = ()=>{
        if(localStorage.getItem("adminLogin")!=null){
            return true;
        }
        else{
            return false;
        }
    }
    this.clearData = ()=>{
        localStorage.clear("adminLogin");
    }
    this.isValidFile = (file)=>{
    	var ext = ['jpg','jpeg','png'];
    	var fileExt = file.split(".").pop().toLowerCase();
    	if(ext.indexOf(fileExt)>-1){
    		return true;
    	}
    	else{
    		return false;
    	}
    }
})