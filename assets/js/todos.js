//Check off specific todos by clicking
// $("li").on("click", function() {
$("ul").on("click", "li", function() {
  //Click() only adds listeners for existing elements
  //on() will aadd listeners for  all potential future elements
  //only add the listener on elements that exist when this code runs the first time
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //13 = enter
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //creat a new li
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>"
    );
  }
});

$("#plus-icon").click(function() {
  $("input[type='text']").fadeToggle();
});
