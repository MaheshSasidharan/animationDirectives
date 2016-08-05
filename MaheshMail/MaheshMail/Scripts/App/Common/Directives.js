Mail

    .directive('animateRandomscale', function () {
        return {
            restrict: 'A',
            scope: {
                'condition': '='
            },
            link: function (scope, element, attrs) {
                scope.$watch('condition', function (condition) {
                    var myEl = angular.element(element[0].querySelectorAll('.randomscaleClass'));
                    for (var i = 0; i < myEl.length; i++) {
                        var ele = myEl[i];
                        if (condition) {
                            var scaleX = Math.random();
                            //angular.element(ele).css('transform', 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') scaleZ(' + scaleZ + ') ');
                            angular.element(ele).css('transform', 'scaleX(' + scaleX + ')');                            
                        } else {
                            angular.element(ele).css('transform', 'scaleX(1)');
                        }
                    }                    
                });
            }
        }
    })
	
    .directive('animateRandomrotate', function () {
        return {
            restrict: 'A',
            scope: {
                'condition': '='
            },
            link: function (scope, element, attrs) {
                scope.$watch('condition', function (condition) {
                    var myEl = angular.element(element[0].querySelectorAll('.randomrotateClass'));
                    for (var i = 0; i < myEl.length; i++) {
                        var ele = myEl[i];
                        if (condition) {
                            var x = Math.floor((Math.random() * 360) + 1);
                            var y = Math.floor((Math.random() * 360) + 1);
                            var z = Math.floor((Math.random() * 360) + 1);
                            //angular.element(ele).css('transform', 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)');
                            var scaleX = Math.random() /4;
                            var scaleY = Math.random() /4;
                            var scaleZ = Math.random() /4;
                            //angular.element(ele).css('transform', 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') scaleZ(' + scaleZ + ') ');
                            angular.element(ele).css('transform', 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' + 'scaleX(' + scaleX + ')');                            
                        } else {
                            angular.element(ele).css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
                        }
                    }                    
                });
            }
        }
    })

    .directive('backImg', function(){
        return function(scope, element, attrs){
            attrs.$observe('backImg', function(value) {
                element.css({
                    'background-image': 'url(' + value +')',
                    'background-size' : 'cover'
                });
            });
        };
    })

  .directive('myCurrentTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {

      function link(scope, element, attrs) {
          var format,
              timeoutId;

          function updateTime() {
              element.text(dateFilter(new Date(), format));
          }

          scope.$watch(attrs.myCurrentTime, function (value) {
              format = value;
              updateTime();
          });

          element.on('$destroy', function () {
              $interval.cancel(timeoutId);
          });

          // start the UI update process; save the timeoutId for canceling
          timeoutId = $interval(function () {
              updateTime(); // update DOM
          }, 1000);
      }

      return {
          link: link
      };
  }]);