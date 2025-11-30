// header
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.formosalube-header').addClass('s-height');
    $('#sub-menu1').css({"top":"57px"});
    $('#sub-menu2').css({"top":"57px"});
  } else {
    $('.formosalube-header').removeClass('s-height');
    $('#sub-menu1').css({"top":"95px"});
    $('#sub-menu2').css({"top":"95px"});
  }
});

$(function () {
  $(".dropdown").hover(function(){
      $(this).find(".megamenu").show();
  },function(){
      $(this).find(".megamenu").hide();
  });
});


// sub menu
$(function () {
  $("#a2-iframe, #a3-iframe, #a4-iframe, #a5-iframe, #a6-iframe").hide();
  $("#a1").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a1-iframe").show();
    return false;
  });
  $("#a2").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a2-iframe").show();
    return false;
  });
  $("#a3").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a3-iframe").show();
    return false;
  });
  $("#a4").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a4-iframe").show();
    return false;
  });
  $("#a5").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a5-iframe").show();
    return false;
  });
  $("#a6").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#a6-iframe").show();
    return false;
  });

  $("#c2-iframe, #c3-iframe, #c4-iframe, #c5-iframe, #c6-iframe").hide();
  $("#c1").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c1-iframe").show();
    return false;
  });
  $("#c2").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c2-iframe").show();
    return false;
  });
  $("#c3").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c3-iframe").show();
    return false;
  });
  $("#c4").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c4-iframe").show();
    return false;
  });
  $("#c5").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c5-iframe").show();
    return false;
  });
  $("#c6").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#c6-iframe").show();
    return false;
  });

  $("#d1-iframe, #d2-iframe, #d3-iframe, #d4-iframe, #d5-iframe, #d6-iframe").hide();
  $("#d1").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d1-iframe").show();
    return false;
  });
  $("#d2").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d2-iframe").show();
    return false;
  });
  $("#d3").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d3-iframe").show();
    return false;
  });
  $("#d4").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d4-iframe").show();
    return false;
  });
  $("#d5").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d5-iframe").show();
    return false;
  });
  $("#d6").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#d6-iframe").show();
    return false;
  });

  $("#e1-iframe, #e2-iframe, #e3-iframe, #e4-iframe").hide();
  $("#e1").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#e1-iframe").show();
    return false;
  });
  $("#e2").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#e2-iframe").show();
    return false;
  });
  $("#e3").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#e3-iframe").show();
    return false;
  });
  $("#e4").click(function () {
    $(this).parents().parents().find(".iframe-cont iframe").hide();
    $("#e4-iframe").show();
    return false;
  });
});
