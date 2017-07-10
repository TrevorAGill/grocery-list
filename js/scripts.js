var groceries = [];

function displayList(){
  $("#groceryInput").hide();
  groceries.sort();

  groceries.forEach(function(grocery){
    grocery = grocery.toUpperCase();
    $("#groceryList").append("<li>" + grocery + "</li>");
  })

  $("#groceryList").show();
};


$(document).ready(function(){
  $("#groceryInput").submit(function(event){
    var item = $("input#groceryitem").val();
    // $("input#groceryitem").val() = "";
    groceries.push(item);
    this.reset();
    event.preventDefault();
  });
});



// groceries.sort();
// groceries.toUpperCase();
