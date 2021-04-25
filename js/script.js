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

    if (size.length === 0 || crust.length === 0 || topping.length === 0 ) {
      alert("Select from all the fiels before adding to cart!!! ")
      throw new Error;
    }
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
    order.toppingCost = toppingCost;
    order.crustCost = crustCost;
    order["total"] = (order["toppingCost"] + order["crustCost"]);
    cart.push(order);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Your selection have been successfuly added to cart.")
    $(".view-order").show();
    $("#header").hide();
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
    $("#orderTable").show();
    $(".banner").hide();
    $("#ask").show();
    const total = cart.reduce((sum, item) => sum + (parseInt(item['total'])), 0);
    const shippingCost = 0.2*total;
    tot.innerHTML = "Grand Total Ksh " + total.toString();

    $("#confirm").click(function(event) {
      event.preventDefault();
      let delivery = $("#askForLocation").val();
      if(delivery === "Yes") {
        $("#message").text("Your shipping cost is Ksh " + shippingCost);
        $("#confirmAlert").show();
        $("#locate").show();
      }
      else {
        $("#checkOut").show();
      }
    })

    $("#locationButton").click(function(event) {
      event.preventDefault();
      let shippingLocation = $("input#shippingLocation").val();
      if (shippingLocation.length === 0 ) {
        alert ("Enter shipping location")
      }
      else {
        $("#areaMessage").text("Your shipping location is " + shippingLocation +". Your order will be delivered to your location soon.");
        $("#locationAlert").show();
        $("#checkOut").show();
      }
    })
  });

});