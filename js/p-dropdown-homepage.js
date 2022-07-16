$(document).ready(function () {
    $('#publication-btn-homepage').click(function(){
     $('#publications-container-homepage').css('height', 'auto')
    })
    .click(function(){
     $('#publication-btn-homepage').css('display', 'none')
    })
    .click(function(){
     $('#close-btn-homepage').css('display', 'block')
    })
    $('#close-btn-homepage').click(function(){
     $('#publications-container-homepage').css('height', '')
    })
    .click(function(){
     $('#close-btn-homepage').css('display', 'none')
    })
    .click(function(){
     $('#publication-btn-homepage').css('display', 'block')
    })
   });