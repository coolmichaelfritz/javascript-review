$(document).ready(function() {
  $("form#restaurant").submit(function() {
    var userName = $("input#name").val();
    var userRadio1 = $("input:radio[name=inlineRadioOptions]:checked").val();
    var userTemp = parseInt($("input#temperature").val());
    var userRadio2 = $("input:radio[name=inlineRadioOptions2]:checked").val();
    var userAge = parseInt($("input#age").val());


    var cityLocation = $("input:radio[name=cityLocation]:checked").val();
    var result;
    if (cityLocation === "eastSide") {
      result = ("hamburger");
    } else if (cityLocation === "westSide") {
      result = ("Chaba Thai");
    };


    $("#output").text(result)
  });







});
