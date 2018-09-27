app.directive("myNav",()=>{
	return{
		templateUrl:"include/nav.php",
		link:(scope,elem,attr)=>{
			elem.find('.open-btn').click(()=>{
				$('.open-btn').hide();
				$('.close-btn').show();
				$('#sidenav').css('margin-left','0px');
			})
			elem.find('.close-btn').click(()=>{
				$('.close-btn').hide();
				$('.open-btn').show();
				$('#sidenav').css('margin-left','-270px');
			})
			elem.find('.sidenav-li').not('.more-drp-btn,.material-drp-btn').click(function() {
				$('.close-btn').hide();
				$('.open-btn').show();
				$('#sidenav').css('margin-left','-270px');
			})
			// angular.element(window).on("scroll",()=>{
			// 	if(angular.element(window).scrollTop()>160){
			// 		elem.find(".navbar-container").addClass("fixed-nav");
			// 		elem.find(".navbar-container .heading").removeClass("heading-hide");
			// 	}
			// 	else{
			// 		elem.find(".navbar-container .heading").addClass("heading-hide");
			// 		elem.find(".navbar-container").removeClass("fixed-nav");
			// 	}
			// })
			// elem.find(".navbar-container ul li>a").on('click',(x)=>{
			// 	elem.find(".navbar-container ul li a").removeClass('active');
			// 	angular.element(x.target).addClass('active');
			// })
		}
	}
});
app.directive('gallery', function (saveData) {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ngModel) {
            ngModel.$render = function () {
                ngModel.$setViewValue(el.val());
            };
            el.bind('change', function (e) {
                if(saveData.isValidFile(el[0].files[0].name)){
                    scope.file = el[0].files[0];
                    scope.$apply(function () {
                        ngModel.$render();
                    });                    
                }
                else{
                    console.log("choose valid file");
                }
            });
        }
    };
});
