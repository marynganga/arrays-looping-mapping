$(document).ready(function() {
  $("#favouritethings").submit(function(event) {
    event.preventDefault();
    var favourites = $("#name").val();

    var favourites1 = $("#food").val();

    var favourites2 = $("#music").val();

    var favourites3 = $("#color").val();

    var favourites4 = $("#city").val();

    var yourfaves = [$("#name").val(), $("#food").val(), $("#music").val(), $("#color").val(), $("#city").val()];
    var cloneyourfaves = yourfaves.slice(0, 3);
    console.log(yourfaves);
    console.log(cloneyourfaves);
    var yourfaves2 = cloneyourfaves[1] + ', ' + cloneyourfaves[0] + ', ' + cloneyourfaves[2] + ',';
    var yourfaves3 = yourfaves2.concat(yourfaves);
    var languages = ['HTML', 'CSS', 'JavaScript'];
    yourfaves.forEach(function(fave) {
      alert('You love ' + fave + '!');
    });


    /*  $("#ouput1").append("yourfaves3[0]");
    $("#ouput2").append(yourfaves3[1]);
    $("#ouput3").append(yourfaves3[2]);
    $("#ouput4").append(yourfaves3[3]);
    $("#ouput5").append(yourfaves3[4]);
    $("#ouput6").append(yourfaves3[5]);
    $("#ouput7").append(yourfaves3[6]);
    $("#ouput8").append(yourfaves3[7]);
*/

  });
});
