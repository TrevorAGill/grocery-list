var listNum = 0;

$(document).ready(function(){
  // alert(("#groceryitem"+listNum).val === undefined);
  var stringLength = ("#groceryitem" + listNum).val().length;
  alert(stringLength);
  if(("#groceryitem0").val === undefined){
    $("#grocerylist").append("<input id='groceryitem'" + listNum + " class='form-control' type='text'>");
    $("#groceryitem" + listNum).keypress(function(){
      listNum += 1;
    });
  } else {
    alert("test");
  }
});
