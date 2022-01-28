$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
(function () {
        const header = document.querySelector('.header');
        window.onscroll = () => {
          if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            } else {
            header.classList.remove('header_active')
            }
        };
        }());



$(function() {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
      });
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
                      
      responsive: [
                    {
        breakpoint: 900,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
                  }
                    },
                      {
        breakpoint: 699,
          settings:  
                  {
                
            slidesToShow: 1,
            slidesToScroll: 1,
                  }
                      }
                  ]
                });
        })



$(function() {

$('.center').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

})




