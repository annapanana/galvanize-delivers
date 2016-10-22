"use strict";

var menu = {
  burger: 8.99,
  pizza: 11.99,
  ribs: 14.99,
  icecream: 7.99
}

var order = $("#order");
//1. Add menu items to the receipt which updates the subtotal, tax, and total.
$(function() {
  $("#add_burger").on("click", function(event) {
    updateOrder(event.target.id)
  });
});

function updateOrder(item) {

}
