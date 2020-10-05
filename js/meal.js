$(document).ready(function(){
    $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return
        var carousel = e.relatedTarget
        $('#info').text(carousel.relative(carousel.current()) + 1 + '-' + carousel.items().length)
      }).owlCarousel({
        loop:true,
        mouseDrag:false,
        touchDrag:false,
        margin:10,
        nav:true,
        dots:false,
        items:4,
        navText: [
            "<img src='images/Rectangle_13_copy.png'>",
            "<img src='images/Rectangle_13.png'>"
        ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});


var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
})

function myFunction() {
    document.getElementById("carousel.current()").style.color = "red";
}
