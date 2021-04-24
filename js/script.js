//Business Logic
function Pizza(size ,crust,topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
Pizza.prototype.order = function() {
  return this.size + this.crust + this.topping;
} 
