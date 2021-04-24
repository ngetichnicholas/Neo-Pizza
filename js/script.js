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

    if (crust == "Crispy") {
      let crustCost = 200;
    }
    else if (crust == "Stuffed") {
      let crustCost = 250;
    }
    else if (crust == "Gluten-free") {
      let crustCost = 300;
    }

    
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