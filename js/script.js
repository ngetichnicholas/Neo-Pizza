//Business Logic
function Pizza(crust, topping) {
  this.crustCost = crust;
  this.toppingCost = topping;
}
Pizza.prototype.myOrder = function () {
   result = this.crustCost + this.toppingCost;
   return result;
  
}


//User Interface Logic
$(document).ready(function () {
  let orderForm = document.querySelector('#orderForm');
  let checkOrder = document.querySelector("#checkOrder");
  let tot = document.querySelector("#total");
  let cart = [];
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let size = $("#size").val();
    let crust = $("#crust").val();
    let topping = $("#topping").val();
    let toppingCost = 0;
    let crustCost = 0;

    if (crust == "Crispy") {
      crustCost = crustCost + 200;
    } else if (crust == "Stuffed") {
      crustCost = crustCost + 250;
    } else if (crust == "Gluten-free") {
      crustCost = crustCost + 300;
    }

    if (topping == "Mushroom") {
      toppingCost = toppingCost + 150;
    } else if (topping == "Sausage") {
      toppingCost = toppingCost + 200;
    } else if (topping == "Green Pepper") {
      toppingCost = toppingCost + 250;
    }

    if (size == "Small") {
      toppingCost = toppingCost * 1.5;
    } else if (size == "Medium") {
      toppingCost = toppingCost * 2;
    } else if (size == "Large") {
      toppingCost = toppingCost * 2.5
    }

    let newOrder = new Pizza(crustCost, toppingCost);
    let fd = new FormData(orderForm);
    let order = {}
    for (let key of fd.keys()) {
      if (fd.get(key).toString().length > 0) {
        order[key] = fd.get(key).toString();
      }
    }
    order.toppingCost=toppingCost;
    order.crustCost=crustCost;
    order["total"] = (order["toppingCost"] + order["crustCost"]);
    cart.push(order);
    if (confirm("Confirm you want to add this pizza to your cart")) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
  checkOrder.addEventListener('click', function () {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.length > 0) {
      document.querySelector("#customerOrder").innerHTML = "";
      cart.forEach(element => { 

        document.querySelector("#customerOrder").innerHTML += `<tr>
      <td>${element['size']}</td>
      <td>${element['crust']}</td>
      <td>${element['topping']}</td>
      <td>${(element['toppingCost']) + (element['crustCost'])}</td>
      </tr>`;
      });

    }
    let total = cart.reduce((sum, item) => sum + (parseInt(item['total'])), 0);
    tot.innerHTML = "Total " + total.toString();
  });

});