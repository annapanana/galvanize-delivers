"use strict";

var menu = {
  "Royale with Cheese": 8.99,
  "Arugula Pie": 11.99,
  "Smoked Swine": 14.99,
  "Ice Cream Biscut": 7.99
};

var order = $("#order");
var subtotal = $("#subtotal");
var tax = $("#tax");
var total = $("#total");
var subtotalValue = 0;
var taxValue = 0;
var totalValue = 0;
var contactInfo = [];

$(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  
  $(".food-item").on("click", function(event) {
    // prevent page from reloading
    event.preventDefault();
    // execute order functionality
    updateOrder(event.target.name);
  });

  $()

  $("#contact").on("click", function(event) {
    contactInfo = [];
    contactInfo.push($("#name").val());
    contactInfo.push($("#phone_number").val());
    contactInfo.push($("#address").val());
    validateInformation(contactInfo);
  });
});

function updateOrder(item) {
  // update itemized table
  var newItem = "<tr><td>" + item + "</td><td class = 'right-align'>" + menu[item]+ "</td></tr>";
  order.append(newItem);

  subtotalValue = Number(subtotalValue);
  subtotalValue+= menu[item];
  subtotalValue = subtotalValue.toFixed(2);
  $(subtotal.text("$" + subtotalValue));

  taxValue = Number(taxValue);
  taxValue+= menu[item]*.04;
  taxValue = taxValue.toFixed(2);
  $(tax.text("$" + taxValue));

  totalValue = Number(totalValue);
  totalValue+=Number(subtotalValue)+Number(taxValue);
  totalValue = totalValue.toFixed(2);
  $(total.text("$" + totalValue));
}

function validateInformation(textFields) {
  // check the number of children in order
  if (order.children().length > 0) {
    for (var i = 0; i < textFields.length; i++) {
      // console.log(textFields[i]);
      if (!textFields[i]) {
        // return error message
        Materialize.toast("All contact info must be filled out.")
        return;
      }
    }
  } else {
    Materialize.toast("Cart is empty!")
    return;
  }
    Materialize.toast("Success!")
}
