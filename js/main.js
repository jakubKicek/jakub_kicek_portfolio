$(document).ready(function(){
//    let windowWidth = $(window).width();
//    console.log(windowWidth);
    
   console.log("dziala");
    window.addEventListener("scroll",function(e){
        
        console.log("fssss");
        let top = this.pageYOffset;
        let layers = $('.paralax');
        let layer, speed, yPos;
        for(let i=0;i<layers.length;i++){
            layer=layers[i];
            speed=$(layer).attr("data-speed");
            yPos = (top*speed/100);
            $(layer).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }
    })
    
    
    
})
