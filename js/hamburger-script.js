$(document).ready(function () {
  $("#hamburger-btn").click(function () {
    $("#nav-menu").css('display', 'block');
  });

  $("#close-btn").click(function () {
    $("#nav-menu").css('display', 'none');
  });
});


$(document).ready(function () {
  $('#E-type2').click(function () {
    $('#E-type2').addClass('E-type-active')
  })
    .click(function () {
      $('#E-type1').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type3').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type4').removeClass('E-type-active')
    })
});

$(document).ready(function () {
  $('#E-type1').click(function () {
    $('#E-type1').addClass('E-type-active')
  })
    .click(function () {
      $('#E-type2').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type3').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type4').removeClass('E-type-active')
    })
});

$(document).ready(function () {
  $('#E-type3').click(function () {
    $('#E-type3').addClass('E-type-active')
  })
    .click(function () {
      $('#E-type1').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type2').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type4').removeClass('E-type-active')
    })
});

$(document).ready(function () {
  $('#E-type4').click(function () {
    $('#E-type4').addClass('E-type-active')
  })
    .click(function () {
      $('#E-type1').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type2').removeClass('E-type-active')
    })
    .click(function () {
      $('#E-type3').removeClass('E-type-active')
    })
});

