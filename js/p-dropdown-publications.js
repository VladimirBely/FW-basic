$(document).ready(function () {
    $('#publication-btn-p').click(function(){
     $('#publications-container-p').css('height', 'auto')
    })
    .click(function(){
     $('#publication-btn-p').css('display', 'none')
    })
    .click(function(){
     $('#close-btn-p').css('display', 'block')
    })
    $('#close-btn-p').click(function(){
     $('#publications-container-p').css('height', '')
    })
    .click(function(){
     $('#close-btn-p').css('display', 'none')
    })
    .click(function(){
     $('#publication-btn-p').css('display', 'block')
    })
   });