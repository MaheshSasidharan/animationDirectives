var Mail = angular.module('Mail', ['ngRoute']);

Mail
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
.controller('LayoutPage', ['$scope', '$timeout', '$interval', '$location', '$window', LayoutPage])


function LayoutPage($scope, $timeout, $interval, $location, $window) { 
    var vm = this;
		
	vm.Translate = -288;
	vm.Rotate = 0;
	
	vm.GoRotate = function(sType){
		if(sType === 'p'){
			vm.Rotate -= 40;				
		}else{
			vm.Rotate += 40;
		}
		vm.sStyle = "translateZ(" + vm.Translate + "px) rotateY(" + vm.Rotate + "deg)";		
	}
}

