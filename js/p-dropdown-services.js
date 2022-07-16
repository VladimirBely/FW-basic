$(document).ready(function () {
  $('#publication-btn-services').click(function () {
    $('#publications-container-services').css('height', 'auto')
  })
    .click(function () {
      $('#publication-btn-services').css('display', 'none')
    })
    .click(function () {
      $('#close-btn-services').css('display', 'block')
    })
  $('#close-btn-services').click(function () {
    $('#publications-container-services').css('height', '')
  })
    .click(function () {
      $('#close-btn-services').css('display', 'none')
    })
    .click(function () {
      $('#publication-btn-services').css('display', 'block')
    })
});