var onLineFoodOrderingAnimation = angular.module('onLineFoodOrderingAnimation', ['ngAnimate']);

onLineFoodOrderingAnimation.animation('.media', [function() {

    return {
        enter: function(element, doneFn) {
            jQuery(element).hover(function(){
                $(this).addClass('media-animation')
                $(this).addClass('animated')
            },function(){
                $(this).removeClass('animated')
                $(this).removeClass('media-animation')
            })
            // remember to call doneFn so that angular
            // knows that the animation has concluded
        }
    }

}]);


/*
onLineFoodOrderingAnimation.animation('.media', ['$animateCss',function($animateCss) {

    return {
        enter: function(element, doneFn) {
            var height = element[0].offsetHeight;
            return $animateCss(element, {
                addClass: 'red large-text pulse-twice',
                easing: 'ease-out',
                from: { height:'0px' },
                to: { height:height + 'px' },
                duration: 1 // one second
            });
        }
    }

}]);
*/

