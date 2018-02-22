$(document).ready(function() {
  $("form#restaurant").submit(function() {
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
