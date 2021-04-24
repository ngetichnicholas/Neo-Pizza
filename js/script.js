//Business Logic
function Pizza(size ,crust,topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
Pizza.prototype.order = function() {
  return this.size + this.crust + this.topping;
} 

$(document).ready(function() {
  $("#order").click(function(event) {
    event.preventDefault();
    let size = $("#size").val();
    let crust = $("#crust").val();
    let topping = $("#topping").val();
  });
});