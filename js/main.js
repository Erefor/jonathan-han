document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth : true,
        indicators : true
    });
  });
document.addEventListener('DOMContentLoaded', ()=>{
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        
    });
});