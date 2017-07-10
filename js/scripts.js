var groceries = [];

function displayList(){
  $("#groceryInput").hide();

  groceries.forEach(function(grocery){
    $("#groceryList").append("<li>" + grocery + "</li>");
  })

  $("#groceryList").show();
};


$(document).ready(function(){
  $("#groceryInput").submit(function(event){
    var item = $("input#groceryitem").val();
    groceries.push(item);
    event.preventDefault();
  });
  var bob = 1;
});
