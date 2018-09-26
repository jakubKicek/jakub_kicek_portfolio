$(document).ready(function () {
//    alert("Hey! Page is still in polish, but don't worry, english version in progress.");
    window.addEventListener("scroll", function (e) {

        let top = this.pageYOffset;
        let layers = $('.paralax');
        let layer, speed, yPos;
        for (let i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = $(layer).attr("data-speed");
            yPos = (top * speed / 100);
            $(layer).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }

        let nav = $('#main-nav');
        let windowHeight = this.innerHeight;
        if (top >= windowHeight * 0.3) {
            nav.addClass('amWhite');
        } else {
            nav.removeClass('amWhite');
        }


        
        $(".navbar-nav li a").click(function (event) {
            $(".navbar-collapse").collapse('hide');
        });
        $("section").click(function (event) {
            $(".navbar-collapse").collapse('hide');
        });
        $("header").click(function (event) {
            $(".navbar-collapse").collapse('hide');
        });
        
    })



})
