$('.siteMap').on('click', function() {
  $(this).siblings('.depth2').slideToggle().css({
    display:'flex'
  })
})

$('#section2 .about23 .btn').on('click', function() {
  $('.info23').slideToggle()
})

$(".slideInner").slick({            
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  fade: true,
  arrows: false,
  })

$('.info23 .chicago .chicagoLogo').on('mouseover', function() {
  $(this).css({
    transform: "scale(1.2)"
  })
})
$('.info23 .chicago .chicagoLogo').on('mouseout', function() {
  $(this).css({
    transform: "scale(1.0)"
  })
})