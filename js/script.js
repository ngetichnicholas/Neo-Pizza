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
    let toppingCost = 0;
    let crustCost = 0;

    if (crust == "Crispy") {
      crustCost = crustCost + 200;
    }
    else if (crust == "Stuffed") {
      crustCost =crustCost + 250;
    }
    else if (crust == "Gluten-free") {
      crustCost =crustCost + 300;
    }

    if (topping == "Mushroom") {
      toppingCost =toppingCost + 150;
    }
    else if (topping == "Sausage") {
      toppingCost =toppingCost + 200;
    }
    else if (topping == "Green Pepper") {
      toppingCost = toppingCost + 250;
    }

    if (size == "Small") {
      toppingCost = toppingCost*1.5;
    }
    else if (size == "Medium") {
      toppingCost = toppingCost*2;
    }
    else if (size == "Large" ) {
      toppingCost = toppingCost*2.5
    }

    let newOrder = new Pizza(crustCost,toppingCost);

    $("#total").text(newOrder.order());
  });
});