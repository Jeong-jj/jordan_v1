$('.siteMap').on('click', function() {
  $(this).siblings('.depth2').slideToggle().css({
    display:'flex'
  })
})

$('#section2 .options .jordanShoes').on('mouseover', function() {
  $(this).css({
    transform: 'scale(1.15)'
  })
})
$('#section2 .options .jordanShoes').on('mouseout', function() {
  $(this).css({
    transform: 'scale(1.0)'
  })
})

$('#section2 .options .jordanShoes img').on('click', function() {
  $('#section2 .stageBox .question').removeClass('question').addClass('on')
  var img = $(this).attr('src')
  $('#section2 .stageBox .on img').attr('src', img)
})