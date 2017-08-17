$(document).ready(function() {
  var faves = ["blueberry", "cookies and cream", "neopolitan", "french vanilla", "chocolate"];
  faves.forEach(function(fave) {

    $("#faveicecream").append("<li>" + fave + "</li>");


  });
});
