//Business Logic
function Pizza(size ,crust,topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
Pizza.prototype.order = function() {
  return this.crust + this.topping;
} 

$(document).ready(function() {
  $("#order").click(function(event) {
    event.preventDefault();
    let size = $("#size").val();
    let crust = $("#crust").val();
    let topping = $("#topping").val();

    
    if (size == "Small") {
      let topping = topping*1.5;
    }
    else if (size == "Medium") {
      let topping = topping*2;
    }
    else if (size == "Large" ) {
      let topping = topping*2.5
    }
  });
});