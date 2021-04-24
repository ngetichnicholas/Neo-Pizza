//Business Logic
function Pizza(crust,topping) {
  this.crustCost = crust;
  this.toppingCost = topping;
}
Pizza.prototype.order = function() {
  return this.crustCost + this.toppingCost;
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

    if (topping == "Mushroom") {
      let toppingCost = 150;
    }
    else if (topping == "Sausage") {
      let toppingCost = 200;
    }
    else if (topping == "Green Pepper") {
      let toppingCost = 250;
    }

    if (size == "Small") {
      let toppingCost = toppingCost*1.5;
    }
    else if (size == "Medium") {
      let toppingCost = toppingCost*2;
    }
    else if (size == "Large" ) {
      let toppingCost = toppingCost*2.5
    }

    let newOrder = new Pizza(crustCost,toppingCost);

    $("#total").text(newOrder.order());
  });
});