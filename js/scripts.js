$(document).ready(function() {
  $("form#items").submit(function(event) {
  event.preventDefault();
  const grocery = $("#grocery").val();
  console.log(grocery);
  const itemList = grocery.toUpperCase().split(", ");
  console.log(itemList);
  itemList.sort();
  itemList.forEach(function(item){
    $("ul").append("<li>" + item + "</li>");
  })




  });
});