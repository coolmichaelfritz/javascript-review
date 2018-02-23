$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    var userName = $("input#name").val();
    var userRadio1 = $("input:radio[name=inlineRadioOptions]:checked").val();
    var userTemp = parseInt($("input#temperature").val());
    var userRadio2 = $("input:radio[name=inlineRadioOptions2]:checked").val();
    var userAge = parseInt($("input#age").val());

    if (userRadio1 === "goOutsideYes" || userRadio2 === "Snow" || userTemp < 60) {
      $("#resultBanf").show();
      $("#resultMaui").hide();
      $("resultPortland").hide();
    }
    else {
      $("#resultMaui").show();
      $("#resultBanf").hide();
      $("resultPortland").hide();
    }
    // else {
    //   $("resultPortland").show();
    //   $("#resultMaui").hide();
    //   $("#resultBanf").hide();
    // }

    $(".resultName").text(userName);
    $("#result").show();

    event.preventDefault();
  });

});
