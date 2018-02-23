$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    var userName = $("input#name").val();
    var userRadio1 = $("input:radio[name=inlineRadioOptions]:checked").val();
    var userTemp = parseInt($("input#temperature").val());
    var userRadio2 = $("input:radio[name=inlineRadioOptions2]:checked").val();
    var userAge = parseInt($("input#age").val());

    if (userRadio1 === "goOutsideYes") {
      $("#resultBanf").show();
      $("#resultMaui").hide();
    }
    else {
      $("#resultMaui").show();
      $("#resultBanf").hide();
    }

    $(".resultName").text(userName);
    $("#result").show();

    event.preventDefault();
  });

});
