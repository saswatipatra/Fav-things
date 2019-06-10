$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputFav1 = $("input#fav1").val();
    var inputFav2 = $("input#fav2").val();
    var inputFav3 = $("input#fav3").val();
    var inputFav4 = $("input#fav4").val();

    var arrayFavs = [inputFav1, inputFav2, inputFav3, inputFav4];
    // alert(arrayFavs);
    $(".output").show();

    var clone= arrayFavs.slice(0,4);
    var newFav= [clone[0], clone[2]];
    // alert(clone);
    // alert(newFav);

    newFav.push("flower")
    // alert(newFav);
    $(".name").empty().append(inputName);
    $(".list").append("<li>"+newFav[0]+"</li>");
    $(".list").append("<li>"+newFav[1]+"</li>");
    $(".list").append("<li>"+newFav[2]+"</li>");



  });
});
